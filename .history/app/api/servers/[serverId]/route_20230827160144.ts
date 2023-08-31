import { currentProfile } from '@/lib/current-profile';
import { NextResponse } from 'next/server';

export async function PATCH(req: Request, params: { serverId: string }) {
    try {
        const profile = await currentProfile();
    } catch (error) {
        console.log('[SERVER_ID]', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}
