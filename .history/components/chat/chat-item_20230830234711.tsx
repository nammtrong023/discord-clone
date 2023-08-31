import { Member, MemberRole, Profile } from '@prisma/client';
import UserAvatar from '../user-avatar';
import { ActionTooltip } from '../action-tooltip';
import { Edit, ShieldAlert, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ChatItemProps {
    id: string;
    content: string;
    member: Member & {
        profile: Profile;
    };
    timestamp: string;
    fileUrl: string | null;
    deleted: boolean;
    currentMember: Member;
    isUpdated: boolean;
    socketUrl: string;
    socketQuery: Record<string, string>;
}

const roleIconMap = {
    GUEST: null,
    MODERATOR: <ShieldCheck className='h-4 w-4 ml-2 text-indigo-500' />,
    ADMIN: <ShieldAlert className='h-4 w-4 text-rose-500' />,
};

const ChatItem = ({
    id,
    content,
    currentMember,
    deleted,
    fileUrl,
    isUpdated,
    member,
    socketQuery,
    socketUrl,
    timestamp,
}: ChatItemProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const isAdmin = currentMember.role === MemberRole.ADMIN;
    const isModerator = currentMember.role === MemberRole.MODERATOR;
    const isOwner = currentMember.id === member.id;
    const canDeleteMessage = !deleted && (isAdmin || isModerator || isOwner);
    const canEditMessage = !deleted && isOwner && !fileUrl;

    return (
        <div className='relative group flex items-center hover:bg-black/5 p-4 transition w-full'>
            <div className='group flex gap-x-2 items-start w-full'>
                <div className='cursor-pointer hover:drop-shadow-md transition'>
                    <UserAvatar src={member.profile.imageUrl} />
                </div>
                <div className='flex flex-col w-full'>
                    <div className='flex items-center gap-x-2'>
                        <div className='flex items-center'>
                            <p className='font-semibold text-sm hover:underline'>
                                {member.profile.name}
                            </p>
                            <ActionTooltip label={member.role}>
                                {roleIconMap[member.role]}
                            </ActionTooltip>
                            <span className='text-sm text-zinc-500 dark:text-zinc-400'>
                                {timestamp}
                            </span>
                        </div>
                        {fileUrl && (
                            <a
                                href={fileUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='relative aspect-square rounded-md mt-2 overflow-hidden border flex items-center bg-secondary h-48 w-48'
                            >
                                <Image src={fileUrl} alt={content} fill className='object-cover' />
                            </a>
                        )}
                    </div>
                    {!fileUrl && !isEditing && (
                        <p
                            className={cn(
                                'text-sm text-zinc-600 dark:text-zinc-300',
                                deleted && 'italic text-zinc-500 dark:text-zinc-400 text-xs mt-1',
                            )}
                        >
                            {content}
                            {isUpdated && !deleted && (
                                <span className='text-[10px] mx-2 text-zinc-500 dark:text-zinc-400'>
                                    (edited)
                                </span>
                            )}
                        </p>
                    )}
                </div>
            </div>
            {canDeleteMessage && (
                <div className='hidden group-hover:flex items-center gap-x-2 absolute p-1 -top-2 right-5 bg-white dark:bg-zinc-800 border rounded-sm'>
                    {canEditMessage && (
                        <ActionTooltip label='Edit'>
                            <Edit className='h-4 w-4 cursor-pointer ml-auto text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition' />
                        </ActionTooltip>
                    )}
                    <ActionTooltip label='Edit'>
                        <Edit className='h-4 w-4 cursor-pointer ml-auto text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition' />
                    </ActionTooltip>
                </div>
            )}
        </div>
    );
};

export default ChatItem;