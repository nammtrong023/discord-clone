import { getOrCreateConverSation } from '@/lib/conversation';
import { currentProfile } from '@/lib/current-profile';
import db from '@/lib/db';
import { redirectToSignIn } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

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
            serverId: params.serverId,
            profileId: params.serverId,
        },
        include: {
            profile: true,
        },
    });

    if (!currentMember) return redirect('/');

    const conversation = await getOrCreateConverSation(currentMember.id, params.memberId);

    if (!conversation) return redirect(`/server/${params?.serverId}`);

    const { memberOne, memberTwo } = conversation;

    const otherMember = memberOne.profileId === profile.id

    return <div>mmeber</div>;
};

export default MemberIdPage;
