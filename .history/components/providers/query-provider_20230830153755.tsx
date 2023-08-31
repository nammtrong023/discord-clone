'use client';

import { QueryClientProvider } from '@tanstack/react-query';

export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
    const [queryClient, setqueryClient] = useState(second)
    
    return <QueryClientProvider>{children}</QueryClientProvider>;
};
