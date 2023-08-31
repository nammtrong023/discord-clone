'use client';
import { ServerWithMembersWithProfiles } from '@/types';
import { MemberRole } from '@prisma/client';
import { DropdownMenu } from '../ui/dropdown-menu';

interface ServerHeaderProps {
    server: ServerWithMembersWithProfiles;
    role?: MemberRole;
}

const ServerHeader = ({ server, role }: ServerHeaderProps) => {
    const isAdmin = role === MemberRole.ADMIN;
    const isModerator = isAdmin || role === MemberRole.MODERATOR;

    return <DropdownMenu>
        <DropDownTrigger></DropDownTrigger>
    </DropdownMenu>;
};

export default ServerHeader;
