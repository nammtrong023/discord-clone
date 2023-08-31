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
import { useRouter } from 'next/navigation';

const MessageFileModal = () => {
    const router = useRouter();
    const { isOpen, type, onOpen, onClose, data } = useModal();
    const isModalOpen = isOpen && type === 'messageFile';

    const { server } = data;
    const origin = useOrigin();

    const [isLoading, setIsLoading] = useState(false);

    return (
        <Dialog open={isModalOpen} onOpenChange={onClose}>
            <DialogContent className='bg-white text-black p-0 overflow-hidden'>
                <DialogHeader className='pt-8 px-6'>
                    <DialogTitle className='text-2xl text-center font-bold'>
                        Invite your friends
                    </DialogTitle>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default MessageFileModal;
