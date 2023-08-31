import db from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {

    } catch (error) {
        console.log('[SERVER_POST]', error);
        return new NextResponse("Internal Error", status())
    }
}
