'use client';
import { useModal } from '@/hooks/use-modal-store';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Copy } from 'lucide-react';

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
                    <Label className='uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'>
                        Server invite link
                    </Label>
                    <div className='flex items-center mt-2 gap-x-2'>
                        <Input
                            value='Invite-link'
                            className='bg-zinc-300/50 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-black'
                        />
                        <Button size='icon'>
                            <Copy className='w-4 h-4' />
                        </Button>
                        <Button variant='link' size='sm' className='text-xs text-zinc-500 mt-4'>
                            Generate a new link
                            
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default InviteModal;