import { currentProfile } from '@/lib/current-profile';
import { redirectToSignIn } from '@clerk/nextjs';

interface MemberIdPageProps {
    params: {
        serverId: string;
        memberId: string;
    };
}

const MemberIdPage = async ({ params }: MemberIdPageProps) => {
    const profile = await currentProfile();

    if (!profile) return redirectToSignIn();

    return <div>mmeber</div>;
};

export default MemberIdPage;
