import { useEffect, useState } from 'react';

export const useOrigin = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const origin = typeof
};
