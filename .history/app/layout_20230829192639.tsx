import './globals.css';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { ModalProvider } from '@/components/providers/modal-provider';
import { SocketProvider } from '@/components/providers/socket-provider';

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Discord',
    description: 'Discord clone',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang='vi' suppressHydrationWarning>
                <body className={cn(font.className, 'bg-white dark:bg-black38')}>
                    <ThemeProvider
                        attribute='class'
                        defaultTheme='dark'
                        enableSystem={false}
                        storageKey='discord-theme'
                    >
                        <SocketProvider> 
                            
                        <ModalProvider />
                        {children}
                    </ThemeProvider>
                        </SocketProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
