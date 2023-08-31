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
    socketUrl: string;
    socketQuery: Record<string, string>;
}

const ChatItem = ({
    id,
    content,
    currentMember,
    deteled,
    fileUrl,
    isUpdated,
    member,
    socketQuery,
    socketUrl,
    timestamp,
}: ChatItemProps) => {
    return (
        <div className='relative group flex items-center hover:bg-black/5 p-4 transition w-full'>
            <div className='group flex gap-x-2 items-start w-full'>
                <div className='cursor-pointer hover:drop-shadow-md transi'></div>
            </div>
        </div>
    );
};

export default ChatItem;
