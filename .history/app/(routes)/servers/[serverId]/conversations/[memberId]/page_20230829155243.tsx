import { currentProfile } from '@/lib/current-profile';

interface MemberIdPageProps {
    params: {
        serverId: string;
        memberId: string;
    };
}

const MemberIdPage = ({ params }: MemberIdPageProps) => {
    const profile = await currentProfile();

    return <div>mmeber</div>;
};

export default MemberIdPage;
