import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@/components/providers/theme-provider';

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Discord',
    description: 'Discord clone',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang='vi'>
                <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
                    <body className={font.className}>
                        {children}
                        </body>
                </ThemeProvider>
            </html>
        </ClerkProvider>
    );
}
