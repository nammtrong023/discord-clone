import { Avatar } from './ui/avatar';

interface UserAvataProps {
    src?: string;
    className?: string;
}

const UserAvatar = ({ src, className }: UserAvataProps) => {
    return <Avatar>
        <AvatarImage></AvatarImage>
    </Avatar>;
};

export default UserAvatar;
