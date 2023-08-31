'use client';
import CreateServerModal from '../modals/create-server-modal';

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    return <CreateServerModal />;
};

export default ModalProvider;
