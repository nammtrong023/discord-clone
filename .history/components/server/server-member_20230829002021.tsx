import { Member, Profile } from '@prisma/client';

interface ServerMemberProps {
    member: Member & { profile: Profile };
}

const ServerMember = () => {
    return <div></div>;
};

export default ServerMember;
