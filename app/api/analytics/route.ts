import { NextRequest, NextResponse } from 'next/server';

const GA4_MEASUREMENT_ID = 'G-XPJS9MX8L9';
const GA4_API_SECRET = process.env.GA4_API_SECRET || '';

const GA4_ENDPOINT = `https://www.google-analytics.com/mp/collect?measurement_id=${GA4_MEASUREMENT_ID}&api_secret=${GA4_API_SECRET}`;

export async function POST(request: NextRequest) {
    try {
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
