import React from 'react';
import { initialProfile } from '@/lib/initial-profile';

const SetUpPage = async () => {
    const profile = await initialProfile();

    

    return <div>Tạo sever</div>;
};

export default SetUpPage;
