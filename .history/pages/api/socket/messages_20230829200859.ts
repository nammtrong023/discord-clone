import { currentProfilePages } from '@/lib/current-profile-pages';
import { NextApiResponseServerIo } from '@/types';
import { NextApiRequest } from 'next';

export default async function POST(req: NextApiRequest, res: NextApiResponseServerIo) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const profile = await currentProfilePages(req);
        const { content, fileUrl } = req.body;
        const { serverId, channelId } = req.query;

        if (!profile) return res.status(401).json({ message: 'Unauthorized' });

        if (!serverId) return res.status(400).json({ message: 'Internal Error' });
    } catch (error) {
        console.log('MESSAGES_POST', error);
        return res.status(500).json({ message: 'Internal Error' });
    }
}
