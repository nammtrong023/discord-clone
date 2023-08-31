import { Member, Profile, Server } from '@prisma/client';

export type ServerWithMembersWithProfiles = Server & {
    members: M(ember & { profile: Profile })[];
};

export type ServerWithMembersWithProfiles = Server & {
    members: (Member & { profile: Profile })[];
};
