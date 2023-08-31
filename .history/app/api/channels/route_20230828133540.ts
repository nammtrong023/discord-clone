export async function POST(req: Request) {
    try {
    } catch (error) {
        console.log('MEMBER_ID', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}
