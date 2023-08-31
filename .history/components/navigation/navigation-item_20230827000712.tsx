'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useParams } from 'next/navigation';

interface NavigationItemProps {
    id: string;
    imageUrl: string;
    name: string;
}

const NavigationItem = () => {
    const params = useParams();

    return <div></div>;
};

export default NavigationItem;
