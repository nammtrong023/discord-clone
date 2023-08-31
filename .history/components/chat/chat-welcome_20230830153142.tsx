interface ChatWelcomeProps {
    name: string;
    type: 'channel' | 'conversation';
}

const ChatWelcome = ({ name, type }: ChatWelcomeProps) => {
    return <div className='space-y-2 px-4 mb-4'>
        {
            type === 'channel' && (
                <div></div>
            )
        }
    </div>;
};

export default ChatWelcome;
