import React from 'react';
import { initialProfile } from '@/lib/initial-profile';
import db from '@/lib/db';

const SetUpPage = async () => {
    const profile = await initialProfile();

    const server = await db.server.findFirst({
        where: {
            members: {
                some: 
            }
        }
    });

    return <div>Tạo sever</div>;
};

export default SetUpPage;
