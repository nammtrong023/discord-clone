'use client';
import { useModal } from '@/hooks/use-modal-store';
import { Button } from '../ui/button';
import { useState } from 'react';
import axios from 'axios';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '../ui/dialog';

const LeaveServerModal = () => {
    const { isOpen, type, onClose, data } = useModal();
    const isModalOpen = isOpen && type === 'leaveServer';
    const [isLoading, setIsLoading] = useState(false);
    const { server } = data;

    const handleClick = async () => {
        try {
            setIsLoading(true);
            await axios.patch(`/api/servers/${server?.id}/leave`);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

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
                        <Button onClick={onClose} disabled={isLoading} variant='ghost'>
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
