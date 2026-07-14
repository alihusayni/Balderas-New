import { NextResponse } from 'next/server';

const CALLRAIL_SWAP_URL = 'https://cdn.callrail.com/companies/556435243/b8b07fe969694226ed37/12/swap.js';
export const revalidate = 86400;

export async function GET() {
    try {
        const upstream = await fetch(CALLRAIL_SWAP_URL, {
            next: { revalidate: 86400 },
        });
        if (!upstream.ok) {
            return new NextResponse('// CallRail script unavailable', {
                status: 502,
                headers: { 'Content-Type': 'application/javascript' },
            });
        }
        const body = await upstream.text();
        return new NextResponse(body, {
            status: 200,
            headers: {
                'Content-Type': 'application/javascript; charset=utf-8',
                'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
                'X-Content-Type-Options': 'nosniff',
            },
        });
    } catch {
        return new NextResponse('// CallRail script fetch error', {
            status: 502,
            headers: { 'Content-Type': 'application/javascript' },
        });
    }
}
