'use client';

import { Member } from '@prisma/client';

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
    return <div></div>;
};

export default ChatMessages;
