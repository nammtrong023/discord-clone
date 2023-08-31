import { currentProfile } from '@/lib/current-profile';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const profile = await currentProfile();
    } catch (error) {
        console.log('MEMBER_ID', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}
