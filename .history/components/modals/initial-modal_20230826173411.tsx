'use client';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '../ui/dialog';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const formSchema = z.object({
    name: z.string().min(1, { message: 'Server name is required' }),
    imageUrl: z.string().min(1, { message: 'Server image is required' }),
});

const InitialModal = () => {
    const form = useForm({
        defaultValues: {
            name: '',
            imageUrl: '',
        },
    });

    const loading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {};

    return (
        <Dialog open>
            <DialogContent className='bg-white text-black p-0 overflow-hidden'>
                <DialogHeader className='pt-8 px-6'>
                    <DialogTitle className='text-2xl text-center font-bold'>
                        Customize your server
                    </DialogTitle>
                    <DialogDescription className='text-center text-zinc-500'>
                        Give your server a personality with a name and an image. You can always
                        change it later.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form action='' onSubmit={form.handleSubmit(onSubmit)} className='my-8'>
                        <div className='my-8 px-6'>
                            <div className='flex items-center justify-center text-center'>
                                <FormField control={form.control}></FormField>
                            </div>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default InitialModal;