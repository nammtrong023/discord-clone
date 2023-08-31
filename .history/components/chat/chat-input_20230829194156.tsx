'use client';

import * as z from 'zod';

interface ChatInputProps {
    apiUrl: string;
    query: Record<string, any>;
    name: string;
    type: 'conversation' | 'channel';
}

const formSchema = z.object({
    content: z.string().min(1),
});

const ChatInput = ({ name, apiUrl, query, type }: ChatInputProps) => {
    const form = 

    return <div></div>;
};

export default ChatInput;
