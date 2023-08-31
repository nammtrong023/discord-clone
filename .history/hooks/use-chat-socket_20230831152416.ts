import { useSocket } from '@/components/providers/socket-provider';
import { Member, Message, Profile } from '@prisma/client';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

type ChatSocketProps = {
    addKey: string;
    updateKey: string;
    queryKey: string;
};

type MessageWithMemberWithProfile = Message & {
    member: Member & {
        profile: Profile;
    };
};

export const useChatSocket = ({ addKey, queryKey, updateKey }: ChatSocketProps) => {
    const { socket } = useSocket();
    const queryClient = useQueryClient();

    useEffect(() => {
        if (!socket) return;
        
    }, []);
};
