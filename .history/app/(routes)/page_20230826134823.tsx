import { ModeToggle } from '@/components/mode-toggle';
import { UserButton } from '@clerk/nextjs';

export default function Home() {
    return (
        <main className='min-h-full'>
            <UserButton afterSignOutUrl='/' />
            trang chur
            <ModeToggle /></ModeToggle>
        </main>
    );
}
