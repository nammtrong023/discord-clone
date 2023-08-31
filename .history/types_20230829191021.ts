import { Member, Profile, Server } from '@prisma/client';
import {Server as NetServer, Socet}

export type ServerWithMembersWithProfiles = Server & {
    members: (Member & { profile: Profile })[];
};


