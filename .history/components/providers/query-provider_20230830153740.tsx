'use client';

import { QueryClientProvider } from '@tanstack/react-query';

export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
    const [first, setfirst] = useState(second)
    
    return <QueryClientProvider>{children}</QueryClientProvider>;
};
