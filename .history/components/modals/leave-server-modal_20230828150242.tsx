'use client';
import { useModal } from '@/hooks/use-modal-store';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Check, Copy, RefreshCw } from 'lucide-react';
import { useOrigin } from '@/hooks/use-origin';
import { useState } from 'react';
import axios from 'axios';

const LeaveServerModal = () => {
    const { isOpen, type, onOpen, onClose, data } = useModal();
    const isModalOpen = isOpen && type === 'leaveServer';

    const { server } = data;

    const [isLoading, setIsLoading] = useState(false);

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
                    <Button
                        onClick={handleNewLink}
                        disabled={isLoading}
                        variant='link'
                        size='sm'
                        className='text-xs text-zinc-500 mt-4'
                    >
                        Generate a new link
                        <RefreshCw className='w-4 h-4 ml-2' />
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default LeaveServerModal;
