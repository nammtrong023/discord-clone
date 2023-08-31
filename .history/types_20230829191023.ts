import { Member, Profile, Server } from '@prisma/client';
import {Server as NetServer, Soket}

export type ServerWithMembersWithProfiles = Server & {
    members: (Member & { profile: Profile })[];
};


