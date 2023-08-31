import { currentProfile } from '@/lib/current-profile';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const profile = await currentProfile();
        if (!profile) return new NextResponse('Unauthoried', { status: 401 });

        if (!serverId) return new NextResponse('Server ID missing', { status: 400 });
    } catch (error) {
        console.log('MEMBER_ID', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}
