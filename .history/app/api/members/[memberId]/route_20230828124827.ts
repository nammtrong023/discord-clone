import { currentProfile } from '@/lib/current-profile';
import { NextResponse } from 'next/server';
import db from '@/lib/db'

export async function PATCH(req: Request, { params }: { params: { memberId: string } }) {
    try {
        const profile = await currentProfile();

        if (!profile) return new NextResponse('Unauthoried', { status: 401 });
    
        const 

    
    } catch (error) {
        console.log('MEMBER_ID', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}
