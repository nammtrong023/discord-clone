'use client';
import { useModal } from '@/hooks/use-modal-store';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '../ui/dialog';
import { Button } from '../ui/button';
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
                        Leaver Server
                    </DialogTitle>
                    <DialogDescription className='text-center text-zinc-500'>
                        Are you sure you want to leave{' '}
                        <span className='font-semibold text-indigo-500'>{server?.name}</span>
                    </DialogDescription>
                </DialogHeader>
                <div className='p-6'></div>
                <DialogFooter className='bg-gray-100 px-6 py-4'>
                    <div className='flex items-center justify-center w-full'>
                        <Button onClick={() => {}} disabled={isLoading} variant='primary'>
                            Cancel
                        </Button>
                        <Button onClick={() => {}} disabled={isLoading} variant='primary'>
                            Confirm
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default LeaveServerModal;
