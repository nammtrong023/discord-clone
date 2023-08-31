'use client';

import 

interface ChatInputProps {
    apiUrl: string;
    query: Record<string, any>;
    name: string;
    type: 'conversation' | 'channel';
}

const ChatInput = ({ name, apiUrl, query, type }: ChatInputProps) => {
    return <div></div>;
};  

export default ChatInput;
