'use client';

import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

interface EmojiPickerProps {
    onChange: (value: string) => void;
}

const EmojiPicker = ({ onChange }: EmojiPickerProps) => {
    return <div>Smile</div>;
};

export default EmojiPicker;
