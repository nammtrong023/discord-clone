'use client';

interface ChatInputProps {
    apiUrl: string;
    query: Record<string, any>;
    name: string;
    type: 'conversation' | 'channel';
}

const ChatInput = ({name,}: ChatInputProps) => {
    return <div></div>;
};

export default ChatInput;