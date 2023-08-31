'use client';

import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

interface EmojiPickerProps {
    onChange: (value: string) => void;
}

const EmojiPicker = ({ onChange }: EmojiPickerProps) => {
    return <Popover>
        <PopoverTrigger>
            <Smile></Smile>
        </PopoverTrigger>
    </Popover>;
};

export default EmojiPicker;
