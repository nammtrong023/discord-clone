interface ChatWelcomeProps {
    name: string;
    type: 'channel' | 'conversation';
}

const ChatWelcome = ({ name, type }: ChatWelcomeProps) => {
    return <div className=""></div>;
};

export default ChatWelcome;
