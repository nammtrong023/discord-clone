import { Member, Profile } from '@prisma/client';

interface ChatItemProps {
    id: string;
    content: string;
    member: Member & {
        profile: Profile;
    };
    timestamp: string;
    fileUrl: string | null;
    deteled: boolean;
    currentMember: Member;
    isUpdated: boolean;
    socketUrl: string,
    socketQuery: string
}

const ChatItem = ({}: ChatItemProps) => {
    return <div></div>;
};

export default ChatItem;
