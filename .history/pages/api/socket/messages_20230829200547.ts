import { NextApiResponseServerIo } from '@/types';
import { NextApiRequest } from 'next';

export default function POST(req: NextApiRequest, res: NextApiResponseServerIo) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        
    } catch (error) {
        console.log(first)
    }
}