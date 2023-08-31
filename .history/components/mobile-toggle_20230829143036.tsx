import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const MobileToggle = () => {
    return <Sheet>
        <SheetTrigger as>
            <Button></Button>
        </SheetTrigger>
    </Sheet>;
};

export default MobileToggle;
