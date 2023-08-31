import { NextApiRequest } from 'next';
import { Server as NetServer, Socket } from 'net';
import { Server as ServerIO } from 'socket.io';
import { Member, Profile, Server } from '@prisma/client';

export type ServerWithMembersWithProfiles = Server & {
    members: (Member & { profile: Profile })[];
};
