import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const MobileToggle = () => {
    return <Sheet>
        <SheetTrigger asChild>
            <Button></Button>
        </SheetTrigger>
    </Sheet>;
};

export default MobileToggle;
