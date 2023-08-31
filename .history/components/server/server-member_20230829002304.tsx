import { Member, MemberRole, Profile, Server } from '@prisma/client';
import { ShieldCheck } from 'lucide-react';

interface ServerMemberProps {
    member: Member & { profile: Profile };
    server: Server;
}

const roleIconMap = {
    [MemberRole.GUEST]: null,
    [MemberRole.MODERATOR]: <ShieldCheck className='h-4 w-4 mr-2 text-indigo-500' />,
    [MemberRole.ADMIN]: <ShieldAlert className='h-4 w-4 mr-2 text-rose-500' />,
};

const ServerMember = ({ member, server }: ServerMemberProps) => {
    return <div></div>;
};

export default ServerMember;
