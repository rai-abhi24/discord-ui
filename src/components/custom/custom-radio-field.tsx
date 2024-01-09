import { Hash, Volume2Icon } from "lucide-react";
import React from "react";

export type CustomRadioFieldType = "text" | "voice" | "video";

interface ICustomRadioFieldProps {
    title: string;
    type: CustomRadioFieldType;
    value: CustomRadioFieldType;
    handleOnChange: (value: string) => void;
}

export const CustomChannelTypeField: React.FC<ICustomRadioFieldProps> = ({
    title,
    type,
    value,
    handleOnChange,
}: ICustomRadioFieldProps) => {
    const fieldTypeText = () => (
        <label htmlFor={`${title}-radio`}>
            <div className="group mt-2 flex h-16 w-full rounded bg-[#2B2D31] px-4 shadow-md hover:bg-[#43444B]/70 group-checked:bg-[#43444B]">
                <div className="flex items-center pr-3 text-gray-500">
                    <Hash />
                </div>
                <div className="flex flex-col justify-center gap-1">
                    <span className="font-normal capitalize text-[#DBDEE1]">
                        {title}
                    </span>
                    <p className="text-[12px] text-zinc-500/70 dark:text-[#B1B6BD]">
                        Send messages, images, GIF's, emoji, opinions and puns
                    </p>
                </div>
                <div className="ml-auto flex items-center">
                    <input
                        type="radio"
                        id={`${title}-radio`}
                        name={title}
                        value={type}
                        onChange={(e) => handleOnChange(e.target.value)}
                        checked={value === type}
                        className="h-5 w-5 appearance-none rounded-full border-2 border-white p-1 checked:bg-white checked:shadow-[inset_0_0_0_3px] checked:shadow-[#2B2D31] focus:outline-none"
                    />
                </div>
            </div>
        </label>
    );

    const fieldTypeVoice = () => (
        <label htmlFor={`${title}-radio`}>
            <div className="mt-2 flex h-16 w-full rounded bg-[#2B2D31] px-4 shadow-md checked:bg-[#43444B] hover:bg-[#43444B]/70">
                <div className="flex items-center pr-3 text-gray-500">
                    <Volume2Icon className="h-6 w-6" />
                </div>
                <div className="flex flex-col justify-center gap-1">
                    <span className="font-normal capitalize text-[#DBDEE1]">
                        Voice
                    </span>
                    <p className="text-[13px] text-zinc-500/70 dark:text-[#B1B6BD]">
                        Hang out together with voice and video
                    </p>
                </div>
                <div className="ml-auto flex items-center">
                    <input
                        type="radio"
                        id={`${title}-radio`}
                        name={title}
                        className="h-5 w-5 appearance-none rounded-full border-2 border-white p-1 checked:bg-white checked:shadow-[inset_0_0_0_3px] checked:shadow-[#2B2D31] focus:outline-none"
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
        video: () => <></>,
    };

    return <>{type && fieldComponents[type]()}</>;
};
