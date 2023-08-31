import { NextResponse } from "next/server";

export async function PATCH(req: Request, { params }: { params: { memberId: string } }) {
    try {

    } catch (error) {
        console.log('MEMBER_ID', error);
        return new NextResponse()
    }
}
