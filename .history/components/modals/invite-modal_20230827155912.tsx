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

const InviteModal = () => {
    const { isOpen, type, onOpen, onClose, data } = useModal();
    const isModalOpen = isOpen && type === 'invite';

    const { server } = data;
    const origin = useOrigin();

    const [copied, setCopied] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const inviteUrl = `${origin}/invite/${server?.inviteCode}`;

    // copy text
    const handleCopy = () => {
        navigator.clipboard.writeText(inviteUrl);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 1000);
    };

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
                <div className='p-6'>
                    <Label className='uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'>
                        Server invite link
                    </Label>
                    <div className='flex items-center mt-2 gap-x-2'>
                        <Input
                            disabled={isLoading}
                            value={inviteUrl}
                            className='bg-zinc-300/50 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-black'
                        />
                        <Button disabled={isLoading} size='icon' onClick={handleCopy}>
                            {copied ? <Check className='w-4 h-4' /> : <Copy className='w-4 h-4' />}
                        </Button>
                        <Button
                            disabled={isLoading}
                            variant='link'
                            size='sm'
                            className='text-xs text-zinc-500 mt-4'
                        >
                            Generate a new link
                            <RefreshCw className='w-4 h-4 ml-2' />
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default InviteModal;
