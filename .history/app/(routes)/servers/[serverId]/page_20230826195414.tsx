import { ModeToggle } from '@/components/mode-toggle';
import { UserButton } from '@clerk/nextjs';

export default function Server() {
    return (
        <main className='min-h-full'>
            <UserButton afterSignOutUrl='/' />
            server
            <ModeToggle />
        </main>
    );
}
