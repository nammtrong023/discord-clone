'use client';
import { ServerWithMembersWithProfiles } from '@/types';
import { ChannelType, MemberRole } from '@prisma/client';

interface ServerSessionProps {
    label: string;
    role?: MemberRole;
    sectionType: 'channels' | 'members';
    channelType?: ChannelType;
    server?: ServerWithMembersWithProfiles;
}

const SeverSession = (: ServerSessionProps) => {
    return <div></div>;
};


export default SeverSession;
