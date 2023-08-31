'use client';

import { Smile } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

interface EmojiPickerProps {
    onChange: (value: string) => void;
}

const EmojiPicker = ({ onChange }: EmojiPickerProps) => {
    return (
        <Popover>
            <PopoverTrigger>
                <Smile className='text-zinc-500 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition' />
            </PopoverTrigger>
            <PopoverContent side='right' sideOffset={40}>
                
            </PopoverContent>
        </Popover>
    );
};

export default EmojiPicker;
