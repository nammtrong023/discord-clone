import { Avatar, AvatarImage } from './ui/avatar';

interface UserAvataProps {
    src?: string;
    className?: string;
}

const UserAvatar = ({ src, className }: UserAvataProps) => {
    return (
        <Avatar className={className}>
            <AvatarImage src={src} />
        </Avatar>
    );
};

export default UserAvatar;
