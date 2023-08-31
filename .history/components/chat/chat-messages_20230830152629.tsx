'use client';

import { Member } from '@prisma/client';

interface ChatMessagesProps {
    name: string;
    member: Member;
    chatId: string;
    apiUrl: string;
    socketUrl: string;
    socketQuery: Record<string, string>;
    paramKey
}

const ChatMessages = () => {
    return <div></div>;
};

export default ChatMessages;
