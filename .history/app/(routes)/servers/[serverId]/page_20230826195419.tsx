import { ModeToggle } from '@/components/mode-toggle';
import { UserButton } from '@clerk/nextjs';

export default function ServerIdPage() {
    return (
        <main className='min-h-full'>
            <UserButton afterSignOutUrl='/' />
            server
            <ModeToggle />
        </main>
    );
}
