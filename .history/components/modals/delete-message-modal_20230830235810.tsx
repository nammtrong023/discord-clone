'use client';
import { useModal } from '@/hooks/use-modal-store';
import { Button } from '../ui/button';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '../ui/dialog';
import qs from 'query-string';

const DeleteMessageModal = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const { isOpen, type, onClose, data } = useModal();

    const isModalOpen = isOpen && type === 'deleteMessage';
    const { apiUrl, query } = data;

    const handleClick = async () => {
        try {
            setIsLoading(true);
            const url = qs.stringifyUrl({
                url: apiUrl || '',
                query,
            });
            await axios.delete(url);

            onClose();
            router.refresh();
            router.push(`/servers/${server?.id}`);
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
                        Delete Message
                    </DialogTitle>
                    <DialogDescription className='text-center text-zinc-500'>
                        Are you sure you want to delete? <br />
                        <span className='font-semibold text-indigo-500'>#{channel?.name}</span> will
                        be deleted
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className='bg-gray-100 px-6 py-4'>
                    <div className='flex items-center justify-between w-full'>
                        <Button onClick={onClose} disabled={isLoading} variant='ghost'>
                            Cancel
                        </Button>
                        <Button onClick={handleClick} disabled={isLoading} variant='primary'>
                            Confirm
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default DeleteMessageModal;
