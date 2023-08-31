import db from '@/lib/db';
import { currentProfile } from '@/lib/current-profile';
import { NextResponse } from 'next/server';

export async function PATCH(req: Request, {params}) {
    try {
        const { name, imageUrl } = await req.json();
        const profile = await currentProfile();

        if (!profile) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        const server = await db.server.update({
            where: {
                id: params.serverId,
            },

            data: {
                profileId: profile.id,
                name,
                imageUrl,
            },
        });

        return NextResponse.json(server);
    } catch (error) {
        console.log('[SERVER_POST]', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}
