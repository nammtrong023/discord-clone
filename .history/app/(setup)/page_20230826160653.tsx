import React from 'react';
import { initialProfile } from '@/lib/initial-profile';

const SetUpPage = async () => {
    const profile = await initialProfile();

    const server = await db.server.findF

    return <div>Tạo sever</div>;
};

export default SetUpPage;
