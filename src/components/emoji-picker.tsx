import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { Smile } from "lucide-react";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

interface IEmojiPickerProps {
    onChange: (emoji: string) => void;
}

export const EmojiPicker = ({ onChange }: IEmojiPickerProps) => {
    return (
        <Popover>
            <PopoverTrigger>
                <Smile className="text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition" />
            </PopoverTrigger>
            <PopoverContent
                side='right'
                sideOffset={40}
                className='bg-transparent shadow-none drop-shadow-none border-none mb-16'
            >
                <Picker data={data} onEmojiSelect={(emoji: any) => onChange(emoji.native)} />
            </PopoverContent>
        </Popover>
    )
}