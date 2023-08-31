import { Hash } from 'lucide-react';

interface ChatHeaderProps {
    serverId: string;
    name: string;
    type: 'channel' | 'conversation';
    imageUrl?: string;
}

const ChatHeader = ({ name, serverId, type, imageUrl }: ChatHeaderProps) => {
    return (
        <div className='text-'>
            <Hash className='w-4 h-4' />
        </div>
    );
};

export default ChatHeader;
