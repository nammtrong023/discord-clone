import db from './db';

const findConversation = async (memberOneId: string, memberTwoId: string) => {
    return await db.conversation.findFirst({
        where: {
            AND: [{ memberOneId }, { memberTwoId }],
        },
        include: {
            memberOne: {
                include: {
                    profile: true,
                },
            },
            memberTwo: {
                include: {
                    profile: true,
                },
            },
        },
    });
};

const createNewConversation = async (memberOneId: string, memberTwoId: string) => {
    try {
        
    } catch (error) {
        return null;
    }
};
