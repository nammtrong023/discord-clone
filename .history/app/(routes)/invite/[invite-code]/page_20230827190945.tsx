import { currentProfile } from '@/lib/current-profile';

interface InviteCodePageProps {
    params: {
        inviteCode: string;
    };
}

const InviteCodePage = async ({ params }: InviteCodePageProps) => {
    const profile = await currentProfile();

    if(!)

    return <div></div>;
};

export default InviteCodePage;
