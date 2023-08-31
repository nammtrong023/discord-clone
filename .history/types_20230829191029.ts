import { Member, Profile, Server } from '@prisma/client';
import {Server as NetServer, Socket} from 'net'


export type ServerWithMembersWithProfiles = Server & {
    members: (Member & { profile: Profile })[];
};


