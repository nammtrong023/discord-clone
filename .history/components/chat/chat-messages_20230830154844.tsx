'use client';

import { Member } from '@prisma/client';
import ChatWelcome from './chat-welcome';
import { useChatQuery } from '@/hooks/use-chat-query';
import { Loader2 } from 'lucide-react';

interface ChatMessagesProps {
    name: string;
    member: Member;
    chatId: string;
    apiUrl: string;
    socketUrl: string;
    socketQuery: Record<string, string>;
    paramKey: 'channelId' | 'conversationId';
    paramValue: string;
    type: 'channel' | 'conversation';
}

const ChatMessages = ({
    apiUrl,
    chatId,
    member,
    name,
    paramKey,
    paramValue,
    socketQuery,
    socketUrl,
    type,
}: ChatMessagesProps) => {
    const queryKey = `chat:${chatId}`;

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useChatQuery({
        queryKey,
        apiUrl,
        paramKey,
        paramValue,
    });

    if(status === 'loading') {
        return <div className='flex flex-col flex-1 justify-center items-start'>
                <Loader2 className='animate-spin h-7 w-7 text-zinc-500 my-4'/>
        </div>
    }

    return (
        <div className='flex-1 flex flex-col py-4 overflow-y-auto'>
            <div className='flex-1' />
            <ChatWelcome type={type} name={name} />
        </div>
    );
};

export default ChatMessages;
