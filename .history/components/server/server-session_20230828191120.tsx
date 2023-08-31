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
    return (
        <div className='flex items-center justify-between py-2'>
            <p className='text-xs uppercase font-semibold text-zinc-500 dark:text-zinc-400'>{label}</p>
            {role !== MemberRole.GUEST && sectionType === 'channels'}
        </div>
    );
};

export default SeverSession;
