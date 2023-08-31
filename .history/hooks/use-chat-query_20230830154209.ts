import qs from 'query-string';
import { useSocket } from '@/components/providers/socket-provider';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

interface ChatQueryProps {
    queryKey: string;
    apiUrl: string;
    paramKey: 'channelId' | 'conversationId';
    paramValue: string;
}

export const useChatQuery = ({ apiUrl, paramKey, paramValue, queryKey }: ChatQueryProps) => {
    const { isConnected } = useSocket();
    const params = useParams();

    const fetchMessages = async ({pageParam = undefined}) => {
        
    }
};
