import { currentProfile } from '@/lib/current-profile';
import db from '@/lib/db';
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

    const currentMember = await db.member.findFirst({
        where: {
            serverId: params.serverId
            pro
        }
    })

    return <div>mmeber</div>;
};

export default MemberIdPage;
