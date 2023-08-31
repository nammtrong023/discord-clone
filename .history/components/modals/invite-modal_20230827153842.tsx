'use client';
import { useModal } from '@/hooks/use-modal-store';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Label } from '../ui/label';

const InviteModal = () => {
    const { isOpen, type, onClose } = useModal();
    const isModalOpen = isOpen && type === 'invite';

    return (
        <Dialog open={isModalOpen} onOpenChange={onClose}>
            <DialogContent className='bg-white text-black p-0 overflow-hidden'>
                <DialogHeader className='pt-8 px-6'>
                    <DialogTitle className='text-2xl text-center font-bold'>
                        Invite your friends
                    </DialogTitle>
                </DialogHeader>
              <div className='p-6'>
                <Label>
                    
                </Label>
              </div>
            </DialogContent>
        </Dialog>
    );
};

export default InviteModal;
