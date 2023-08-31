import { Member, Profile, Server } from '@prisma/client';
import {Server as NetServer}

export type ServerWithMembersWithProfiles = Server & {
    members: (Member & { profile: Profile })[];
};


