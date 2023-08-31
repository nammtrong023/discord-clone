import { Member, MemberRole, Profile, Server } from '@prisma/client';

interface ServerMemberProps {
    member: Member & { profile: Profile };
    server: Server;
}

const roleIconMap = {
    [MemberRole.GUEST]: null,
    [MemberRole.MODERATOR]: null,
    [MemberRole.ADMIN]: null,
};

const ServerMember = ({ member, server }: ServerMemberProps) => {
    return <div></div>;
};

export default ServerMember;
