import { Member, Profile } from '@prisma/client';

interface ChatItemProps {
    id: string;
    content: string;
    member: Member & {
        profile: Profile;
    };
    timestamp: string,
    fileUrl: string,
}

const ChatItem = () => {
    return <div></div>;
};

export default ChatItem;
