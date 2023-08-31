import { currentProfile } from '@/lib/current-profile';
import { NextResponse } from 'next/server';

export async function PATCH(req: Request, { params }: { params: { memberId: string } }) {
    try {
        const profile = await currentProfile();

        if (!profile) return new NextResponse('Internal Error', { status: 500 });
    } catch (error) {
        console.log('MEMBER_ID', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}
