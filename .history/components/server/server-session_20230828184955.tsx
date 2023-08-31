import { MemberRole } from '@prisma/client';

interface ServerSessionProps {
    label: string;
    role?: MemberRole;
    sectionType: 'channels' | 'members';
    
}

const SeverSession = () => {
    return <div></div>;
};

export default SeverSession;
