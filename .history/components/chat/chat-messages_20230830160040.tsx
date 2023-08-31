'use client';

import { Member } from '@prisma/client';
import ChatWelcome from './chat-welcome';
import { useChatQuery } from '@/hooks/use-chat-query';
import { Loader2, ServerCrash } from 'lucide-react';
import { Fragment } from 'react';

type message

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

    if (status === 'loading') {
        return (
            <div className='flex flex-col flex-1 justify-center items-start'>
                <Loader2 className='animate-spin h-7 w-7 text-zinc-500 my-4' />
                <p className='text-xs text-zinc-500 dark:text-zinc-400'>Loading messages...</p>
            </div>
        );
    }

    if (status === 'error') {
        return (
            <div className='flex flex-col flex-1 justify-center items-start'>
                <ServerCrash className='h-7 w-7 text-zinc-500 my-4' />
                <p className='text-xs text-zinc-500 dark:text-zinc-400'>Something went wrong!</p>
            </div>
        );
    }

    return (
        <div className='flex-1 flex flex-col py-4 overflow-y-auto'>
            <div className='flex-1' />
            <ChatWelcome type={type} name={name} />
            <div className='flex flex-col-reverse mt-auto'>{
                data?.pages?.map((group, index) => (
                    <Fragment key={index}>
                        {group.items.map((message) => ())}
                    </Fragment>
                ))
            }</div>
        </div>
    );
};

export default ChatMessages;