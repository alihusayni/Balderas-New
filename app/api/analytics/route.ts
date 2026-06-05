import { NextRequest, NextResponse } from 'next/server';

const GA4_MEASUREMENT_ID = 'G-XPJS9MX8L9';
const GA4_API_SECRET = process.env.GA4_API_SECRET || '';
const GA4_ENDPOINT = `https://www.google-analytics.com/mp/collect?measurement_id=${GA4_MEASUREMENT_ID}&api_secret=${GA4_API_SECRET}`;

// IPs to exclude from analytics (agency, developer, client office).
// Set ANALYTICS_BLOCKED_IPS in Vercel env vars as a comma-separated list.
// e.g. ANALYTICS_BLOCKED_IPS=203.0.113.42,198.51.100.7
const BLOCKED_IPS = (process.env.ANALYTICS_BLOCKED_IPS || '')
    .split(',')
    .map(ip => ip.trim())
    .filter(Boolean);

function getClientIp(request: NextRequest): string {
    // Vercel sets x-forwarded-for to the real visitor IP (first entry in chain)
    const forwarded = request.headers.get('x-forwarded-for');
    if (forwarded) return forwarded.split(',')[0].trim();
    return '';
}

export async function POST(request: NextRequest) {
    try {
        // Block internal/developer IPs before forwarding to Google.
        // Returns 204 silently so the browser doesn't trigger error handling.
        const clientIp = getClientIp(request);
        if (clientIp && BLOCKED_IPS.includes(clientIp)) {
            return new NextResponse(null, { status: 204 });
        }

        const text = await request.text();
        const body = JSON.parse(text);

        if (!body?.client_id || !Array.isArray(body?.events)) {
            return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
        }

        if (body.events.length > 25) {
            body.events = body.events.slice(0, 25);
        }

        const ga4Payload = {
            client_id: body.client_id,
            events: body.events,
        };

        fetch(GA4_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ga4Payload),
        }).catch(() => {});

        return new NextResponse(null, { status: 204 });
    } catch {
        return NextResponse.json({ error: 'Bad request' }, { status: 400 });
    }
}
