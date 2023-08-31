import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';

const MobileToggle = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant='ghost' size='icon' className='md:hidden'></Button>
            </SheetTrigger>
            Sh
        </Sheet>
    );
};

export default MobileToggle;
