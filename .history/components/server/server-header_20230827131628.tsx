'use client';
import { Server } from '@prisma/client';
import { ServerWithMembersWithProfiles } from '@/types';

interface ServerHeaderProps {
    server: ServerWithMembersWithProfiles;
}

const ServerHeader = () => {
    return <div></div>;
};

export default ServerHeader;
