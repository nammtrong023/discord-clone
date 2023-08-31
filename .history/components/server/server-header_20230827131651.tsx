'use client';
import { ServerWithMembersWithProfiles } from '@/types';
import { MemberRole } from '@prisma/client';

interface ServerHeaderProps {
    server: ServerWithMembersWithProfiles;
    role?: MemberRole;
}

const ServerHeader = ({ser}) => {
    return <div>
        SeverHeader
    </div>;
};

export default ServerHeader;
