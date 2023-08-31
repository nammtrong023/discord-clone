import { Member, MemberRole, Profile, Server } from '@prisma/client';

interface ServerMemberProps {
    member: Member & { profile: Profile };
    server: Server;
}

const roleIconMap = {
    [MemberRole]
}

const ServerMember = ({ member, server }: ServerMemberProps) => {
    return <div></div>;
};

export default ServerMember;
