import db from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { name, imageUrl } = await req.json();
    } catch (error) {
        console.log('[SERVER_POST]', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}
