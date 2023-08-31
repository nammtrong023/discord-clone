import db from '@/lib/db';
import { currentProfile } from '@/lib/current-profile';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { name, imageUrl } = await req.json();
        const profile = await currentProfile();
        
        if (!profile) return 
    
    } catch (error) {
        console.log('[SERVER_POST]', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}
