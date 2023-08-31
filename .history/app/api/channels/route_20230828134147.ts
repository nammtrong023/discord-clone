import { currentProfile } from '@/lib/current-profile';
import db from '@/lib/db';
import { MemberRole } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const profile = await currentProfile();
        const { name, type } = await req.json();
        const { searchParams } = new URL(req.url);

        if (!profile) return new NextResponse('Unauthoried', { status: 401 });

        const serverId = searchParams.get('serverId');

        if (!serverId) return new NextResponse('Server ID missing', { status: 400 });

        if (name === 'general') {
            return new NextResponse('Name cant be "general"', { status: 400 });
        }

        const server = await db.server.update({
            where: {
                id: profile.id,
                members: {
                    some: {
                        profileId: profile.id,
                        role: {
                            in: [MemberRole.ADMIN, MemberRole.MODERATOR],
                        },
                    },
                },
            },
            data: {
                channels: {
                    create: {
                        profileId: profile.id,
                        
                    }
                }
            }
        });
    } catch (error) {
        console.log('MEMBER_ID', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}
