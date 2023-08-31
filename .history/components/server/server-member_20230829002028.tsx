import { Member, Profile, Server } from '@prisma/client';

interface ServerMemberProps {
    member: Member & { profile: Profile };
    server: Server;
}

const ServerMember = () => {
    return <div></div>;
};

export default ServerMember;
