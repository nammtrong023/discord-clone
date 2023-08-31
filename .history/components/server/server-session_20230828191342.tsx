'use client';
import { ServerWithMembersWithProfiles } from '@/types';
import { ChannelType, MemberRole } from '@prisma/client';
import { ActionTooltip } from '../action-tooltip';
import { Plus } from 'lucide-react';

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
            <p className='text-xs uppercase font-semibold text-zinc-500 dark:text-zinc-400'>
                {label}
            </p>
            {role !== MemberRole.GUEST && sectionType === 'channels' && (
                <ActionTooltip label='Create Channel' side='top'>
                    <button className='text-zinc-500 hover:text-zinc-600 dark:text-zinc-400'>
                        <Plus className='h-4 w-4' />
                    </button>
                </ActionTooltip>
            )}
        </div>
    );
};

export default SeverSession;
