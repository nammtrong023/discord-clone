import { Hash } from 'lucide-react';

interface ChatHeaderProps {
    serverId: string;
    name: string;
    type: 'channel' | 'member';
}

const ChatHeader = () => {
    return (
        <div>
            <Hash className='w-4 h-4' />
        </div>
    );
};

export default ChatHeader;
