import { auth } from '@clerk/nextjs';
import { createUploadthing, type FileRouter } from 'uploadthing/next';

const f = createUploadthing();

const handleAuth = () => {
    const userId = auth();
    if (!userId) throw new Error('Unauthorized');
    return { userId: userId };
};

export const ourFileRouter = {
    serverImage: f.
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
