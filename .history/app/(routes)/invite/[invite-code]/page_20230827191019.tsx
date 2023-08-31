import { currentProfile } from '@/lib/current-profile';
import { RedirectToSignIn } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

interface InviteCodePageProps {
    params: {
        inviteCode: string;
    };
}

const InviteCodePage = async ({ params }: InviteCodePageProps) => {
    const profile = await currentProfile();

    if (!profile) return RedirectToSignIn();

    return <div></div>;
};

export default InviteCodePage;
