import { Hash, Volume2Icon } from "lucide-react";
import React from "react";

export type CustomRadioFieldType = "text" | "voice";

interface CustomRadioFieldProps {
    title: string;
    type: CustomRadioFieldType;
    value: CustomRadioFieldType;
    handleOnChange: (value: string) => void;
}

export const CustomChannelTypeField: React.FC<CustomRadioFieldProps> = ({
    title,
    type,
    value,
    handleOnChange,
}: CustomRadioFieldProps) => {
    const fieldTypeText = () => (
        <label htmlFor={`${title}-radio`}>
            <div className="bg-[#2B2D31] group hover:bg-[#43444B]/70 group-checked:bg-[#43444B] w-full h-16 mt-2 flex shadow-md rounded px-4">
                <div className="flex items-center text-gray-500 pr-3">
                    <Hash />
                </div>
                <div className="flex flex-col justify-center gap-1">
                    <span className="capitalize font-normal text-[#DBDEE1]">{title}</span>
                    <p className="text-[12px] text-zinc-500/70 dark:text-[#B1B6BD]">
                        Send messages, images, GIF's, emoji, opinions and puns
                    </p>
                </div>
                <div className="flex items-center ml-auto">
                    <input
                        type="radio"
                        id={`${title}-radio`}
                        name={title}
                        value={type}
                        onChange={(e) => handleOnChange(e.target.value)}
                        checked={value === type}
                        className="appearance-none w-5 h-5 border-2 border-white rounded-full checked:bg-white checked:shadow-[inset_0_0_0_3px] checked:shadow-[#2B2D31] p-1 focus:outline-none"
                    />
                </div>
            </div>
        </label>
    );

    const fieldTypeVoice = () => (
        <label htmlFor={`${title}-radio`}>
            <div className="bg-[#2B2D31] hover:bg-[#43444B]/70 checked:bg-[#43444B] w-full h-16 mt-2 flex shadow-md rounded px-4">
                <div className="flex items-center text-gray-500 pr-3">
                    <Volume2Icon className="w-6 h-6" />
                </div>
                <div className="flex flex-col justify-center gap-1">
                    <span className="capitalize font-normal text-[#DBDEE1]">Voice</span>
                    <p className="text-[13px] text-zinc-500/70 dark:text-[#B1B6BD]">
                        Hang out together with voice and video
                    </p>
                </div>
                <div className="flex items-center ml-auto">
                    <input
                        type="radio"
                        id={`${title}-radio`}
                        name={title}
                        className="appearance-none w-5 h-5 border-2 border-white rounded-full checked:bg-white checked:shadow-[inset_0_0_0_3px] checked:shadow-[#2B2D31] p-1 focus:outline-none"
                        value={type}
                        onChange={(e) => handleOnChange(e.target.value)}
                        checked={value === type}
                    />
                </div>
            </div>
        </label>
    );

    const fieldComponents = {
        text: fieldTypeText,
        voice: fieldTypeVoice,
    };

    return <>{type && fieldComponents[type]()}</>;
};
