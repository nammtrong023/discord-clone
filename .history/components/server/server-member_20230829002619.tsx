import { cn } from '@/lib/utils';
import { Member, MemberRole, Profile, Server } from '@prisma/client';
import { ShieldAlert, ShieldCheck } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

interface ServerMemberProps {
    member: Member & { profile: Profile };
    server: Server;
}

const roleIconMap = {
    [MemberRole.GUEST]: null,
    [MemberRole.MODERATOR]: <ShieldCheck className='h-4 w-4 ml-2 text-indigo-500' />,
    [MemberRole.ADMIN]: <ShieldAlert className='h-4 w-4 ml-2 text-rose-500' />,
};

const ServerMember = ({ member, server }: ServerMemberProps) => {
    const router = useRouter();
    const params = useParams();

    const icon = roleIconMap[member.role];

    return (
        <button
            className={cn(
                'group p-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:bg-zinc-700/50 transition',
            )}
        >
            {icon}
        </button>
    );
};

export default ServerMember;
