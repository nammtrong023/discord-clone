import { NextResponse } from "next/server";

export async function PATCH(req: Request, params: { serverId: string }) {
    try {
    } catch (error) {
        console.log('[SERVER_ID]', error);
        return new NextResponse('Internal Error')
    }
}
