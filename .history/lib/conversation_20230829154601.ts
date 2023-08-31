import db from './db';

const findConversation = async (memberOneId: string, memberTwoId: string) => {
    return await db.conversation.findFirst({
        where: {
            AND: [
                {                    memberOneId},
                { memberTwoId },
            ],
        },
    });
};
