import { currentProfile } from '@/lib/current-profile';
import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function PATCH(req: Request, params: { serverId: string }) {
    try {
        const profile = await currentProfile();

        if (!profile) return new NextResponse('Unauthoried', { status: 401 });

        if (!params.serverId) return new NextResponse('Server Id missing', { status: 400 });

        const server = db;
    } catch (error) {
        console.log('[SERVER_ID]', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}