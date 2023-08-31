'use client';
import { useEffect, useState } from 'react';
import CreateServerModal from '../modals/create-server-modal';

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted()
    }, [])
    

    return <CreateServerModal />;
};

export default ModalProvider;
