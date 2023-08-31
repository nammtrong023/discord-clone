import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
    publicRoutes: ['api/uploadthing'],
    i
});

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
