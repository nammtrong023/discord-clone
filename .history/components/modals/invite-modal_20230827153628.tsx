'use client';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '../ui/dialog';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { useModal } from '@/hooks/use-modal-store';
import { FileUpload } from '../file-upload';

const InviteModal = () => {
    const router = useRouter();
    const { isOpen, type, onClose } = useModal();

    const isModalOpen = isOpen && type === 'invite';

    return (
        <Dialog open={isModalOpen} onOpenChange={onClose}>
            <DialogContent className='bg-white text-black p-0 overflow-hidden'>
                <DialogHeader className='pt-8 px-6'>
                    <DialogTitle className='text-2xl text-center font-bold'>
                        Customize your server
                    </DialogTitle>
                    <DialogDescription className='text-center text-zinc-500'>
                        Give your server a personality with a name and an image. You can always
                        change it later.
                    </DialogDescription>
                </DialogHeader>
                
            </DialogContent>
        </Dialog>
    );
};

export default InviteModal;
