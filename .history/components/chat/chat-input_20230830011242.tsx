'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem } from '../ui/form';
import { Input } from '../ui/input';
import { Plus } from 'lucide-react';
import axios from 'axios';
import qs from 'query-string';
import { useModal } from '@/hooks/use-modal-store';
import EmojiPicker from '../emoji-picker';

interface ChatInputProps {
    apiUrl: string;
    query: Record<string, any>;
    name: string;
    type: 'conversation' | 'channel';
}

const formSchema = z.object({
    content: z.string().min(1),
});

const ChatInput = ({ name, apiUrl, query, type }: ChatInputProps) => {
    const { onOpen } = useModal();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            content: '',
        },
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const url = qs.stringifyUrl({
                url: apiUrl,
                query,
            });

            await axios.post(url, values);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name='content'
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className='relative p-4 pb-6'>
                                    <button
                                        type='button'
                                        className='absolute top-7 left-8 h-[24px] w-[24px] bg-zinc-500 dark:bg-zinc-400 hover:bg-zinc-600 dark:hover:bg-zinc-300 transition rounded-full p-1 flex items-center justify-center'
                                        onClick={() => onOpen('messageFile', { apiUrl, query })}
                                    >
                                        <Plus className='text-white dark:text-[#313338]' />
                                    </button>
                                    <Input
                                        disabled={isLoading}
                                        className='px-14 py-6 bg-zinc-200/90 dark:bg-zinc-700/50 border-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-zinc-600 dark:text-zinc-200'
                                        placeholder={`Message ${
                                            type === 'conversation' ? name : '#' + name
                                        }`}
                                        {...field}
                                    />
                                    <div className='absolute top-7 right-8'>
                                        <EmojiPicker onChange={} />
                                    </div>
                                </div>
                            </FormControl>
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
};

export default ChatInput;
