'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

interface NavigationItemProps {
    id: string;
    imageUrl: string;
    name: string;
}

const NavigationItem = () => {
    const params = useParams();
    const router = useRouter();

    return <div></div>;
};

export default NavigationItem;
