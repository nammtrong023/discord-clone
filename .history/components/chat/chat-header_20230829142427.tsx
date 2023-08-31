import { Hash } from 'lucide-react';

interface ChatHeaderProps {
    serverId: string;
    name: string;
    type: 'channel' | 'conversation';
    imageUrl?: string;
}

const ChatHeader = ({ name, serverId, type, imageUrl }: ChatHeaderProps) => {
    return (
        <div className='text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-'>
            <Hash className='w-4 h-4' />
        </div>
    );
};

export default ChatHeader;
