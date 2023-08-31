'use client';
import { useModal } from '@/hooks/use-modal-store';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Check, Copy, RefreshCw } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';

const MembersModal = () => {
    const { isOpen, type, onOpen, onClose, data } = useModal();
    const isModalOpen = isOpen && type === 'members';

    const { server } = data;

    const [copied, setCopied] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleNewLink = async () => {
        try {
            setIsLoading(true);
            const respone = await axios.patch(`/api/servers/${server?.id}/invite-code`);

            onOpen('invite', { server: respone.data });
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
                        Invite your friends
                    </DialogTitle>
                </DialogHeader>
                <div className='p-6'></div>
            </DialogContent>
        </Dialog>
    );
};

export default MembersModal;
