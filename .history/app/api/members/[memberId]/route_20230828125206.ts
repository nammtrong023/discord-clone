import { currentProfile } from '@/lib/current-profile';
import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function PATCH(req: Request, { params }: { params: { memberId: string } }) {
    try {
        const profile = await currentProfile();
        const { searchParams } = new URL(req.url);
        const { role } = await req.json();

        if (!profile) return new NextResponse('Unauthoried', { status: 401 });

        const serverId = searchParams.get('serverId');

        if (!serverId) return new NextResponse('Server ID missing', { status: 400 });

        if (!params.memberId) return new NextResponse('Member ID missing', { status: 400 });

        const server = await db.server.update({
            where: {
                id: serverId,
                profileId: profile.id,
            },
            data: {
                members: {
                    update: {
                        where: {
                            
                        }
                    }
                }
            },
        });
    } catch (error) {
        console.log('MEMBER_ID', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}
