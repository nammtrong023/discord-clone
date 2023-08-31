import { currentProfile } from '@/lib/current-profile';
import { redirectToSignIn } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

interface InviteCodePageProps {
    params: {
        inviteCode: string;
    };
}

const InviteCodePage = async ({ params }: InviteCodePageProps) => {
    const profile = await currentProfile();

    if (!profile) return redirectToSignIn();

    if (!params.inviteCode) return redirect('/');
    
    const existingServer =  db.

    return <div></div>;
};

export default InviteCodePage;
