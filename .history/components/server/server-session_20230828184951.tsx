import { MemberRole } from '@prisma/client';

interface ServerSessionProps {
    label: string;
    role?: MemberRole;
    sectionType: 'channel' | 'members';
}

const SeverSession = () => {
    return <div></div>;
};

export default SeverSession;
