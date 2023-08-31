'use client';
import { ServerWithMembersWithProfiles } from '@/types';
import { MemberRole } from '@prisma/client';

interface ServerHeaderProps {
    server: ServerWithMembersWithProfiles;
    role?: MemberRole;
}

const ServerHeader = () => {
    return <div></div>;
};

export default ServerHeader;
