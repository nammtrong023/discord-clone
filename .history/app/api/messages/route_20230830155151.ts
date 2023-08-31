import db from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';
import { currentProfile } from '@/lib/current-profile';
import { NextResponse } from 'next/server';
import { MemberRole } from '@prisma/client';

export async function GET(req: Request) {
    try {
        const profile = await currentProfile();
        const searchParams = new URL(req.url)

        if (!profile) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        const cursor= searchParams.get()

        


        return NextResponse.json(server);
    } catch (error) {
        console.log('[MESSAGES_GET]', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}
