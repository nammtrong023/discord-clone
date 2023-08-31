import db from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';
import { currentProfile } from '@/lib/current-profile';
import { NextResponse } from 'next/server';
import { Message } from '@prisma/client';

const MESSAGES_BATCH = 10;

export async function GET(req: Request) {
    try {
        const profile = await currentProfile();
        const { searchParams } = new URL(req.url);

        if (!profile) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        const cursor = searchParams.get('cursor');
        const channelId = searchParams.get('channelId');

        if (!channelId) {
            return new NextResponse('Channel ID missing', { status: 400 });
        }

        let messages: Message[] = [];

        if (cursor) {
            messages = await db.message.findMany({
                take: MESSAGES_BATCH,
                skip: 1,
                cursor: {
                    id: cursor,
                },
                where: {
                    channelId,
                },
                include: {
                    member: {
                        include: {
                            profile: true,
                        },
                    },
                },
                orderBy: {
                    createdAt: 'desc',
                },
            });
        } else {
            messages = await db.message.findMany({
                take: MESSAGES_BATCH,
                where: {
                    channelId,
                },
                include: {
                    member: {
                        include
                    }
                }
            });
        }

        return NextResponse.json(messages);
    } catch (error) {
        console.log('[MESSAGES_GET]', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}
