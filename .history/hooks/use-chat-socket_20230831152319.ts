import { useSocket } from '@/components/providers/socket-provider';
import { useQueryClient } from '@tanstack/react-query';

type ChatSocketProps = {
    addKey: string;
    updateKey: string;
    queryKey: string;
};

type MessageWithMemberWithProfile = Message

export const useChatSocket = ({ addKey, queryKey, updateKey }: ChatSocketProps) => {
    const { socket } = useSocket();
    const queryClient = useQueryClient();
};
