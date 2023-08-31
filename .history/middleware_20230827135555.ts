import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
    publicRoutes: ['api/uploadthing'],
    ignoredRoutes: ['/((?!api|trpc))(_next|.+..+)(.*)', '/api/uploadthing'],
});

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
