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

const SeverSession = ({ label, role, sectionType, channelType, server }: ServerSessionProps) => {
    return <div className='flex items-center justify-between py-2'>
        <p className='text-xs uppercase font-bold'>{label}</p>
    </div>;
};

export default SeverSession;
