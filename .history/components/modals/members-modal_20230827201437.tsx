'use client';
import { useModal } from '@/hooks/use-modal-store';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';
import { useState } from 'react';
import axios from 'axios';
import { ServerWithMembersWithProfiles } from '@/types';
import { ScrollArea } from '../ui/scroll-area';

const MembersModal = () => {
    const { isOpen, type, onOpen, onClose, data } = useModal();
    const isModalOpen = isOpen && type === 'members';

    const { server } = data as { server: ServerWithMembersWithProfiles };

    const [isLoading, setIsLoading] = useState(false);

    return (
        <Dialog open={isModalOpen} onOpenChange={onClose}>
            <DialogContent className='bg-white text-black p-0 overflow-hidden'>
                <DialogHeader className='pt-8 px-6'>
                    <DialogTitle className='text-2xl text-center font-bold'>
                        Manage Members
                    </DialogTitle>
                    <DialogDescription className='text-center text-zinc-500'>
                        {server.members.length} members
                    </DialogDescription>
                </DialogHeader>
                <ScrollArea className=''>

                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
};

export default MembersModal;
