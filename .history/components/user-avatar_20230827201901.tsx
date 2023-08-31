import { cn } from '@/lib/utils';
import { Avatar, AvatarImage } from './ui/avatar';

interface UserAvataProps {
    src?: string;
    className?: string;
}

const UserAvatar = ({ src, className }: UserAvataProps) => {
    return (
        <Avatar className={cn(className, 'h-7 w-7 md:h-10')}>
            <AvatarImage src={src} />
        </Avatar>
    );
};

export default UserAvatar;
