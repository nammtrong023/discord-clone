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
                <body className={font.className}>
                    <ThemeProvider attribute='class' defaultTheme='system' enableSystem={false}>
                        {children}
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
