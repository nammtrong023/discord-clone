import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';

const MobileToggle = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant='ghost' size='icon' className='md:hidden'>
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent></SheetContent>
        </Sheet>
    );
};

export default MobileToggle;
