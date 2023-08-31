import qs from 'query-string';
import { useSocket } from '@/components/providers/socket-provider';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

interface ChatQueryProps {
    queryKey: string,
    apiUrl: string,
    params
}
