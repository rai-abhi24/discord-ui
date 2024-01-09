import fileUploadIcon from "@/assets/file-upload.svg";

import { X } from "lucide-react";
import { useState } from "react";

interface IFileUploadProps {
    value: string;
    onChange: (url: string) => void;
    endpoint: "messageFile" | "serverImage";
}

export const FileUpload = ({ value, onChange, endpoint }: IFileUploadProps) => {
    const [inputKey, setInputKey] = useState<number>(0);
    const fileSrc = value
        ? "https://avatars.githubusercontent.com/u/108968015?v=4"
        : fileUploadIcon;

    const removeUploadedImage = () => {
        onChange("");
        resetFileInput();
    };

    const resetFileInput = () => {
        setInputKey((prevKey) => prevKey + 1);
    };

    return (
        <div className="relative h-[80px] w-[80px]">
            <div>
                <img
                    src={fileSrc}
                    alt={value ? "Uploaded Image" : "File Upload Icon"}
                    className={`h-full w-full text-[12px] ${
                        value ? "rounded-full" : ""
                    } fill-white`}
                />
                {value && (
                    <div
                        className="absolute right-0 top-0 z-10 h-6 w-6 rounded-full bg-red-500/90"
                        role="button"
                        onClick={removeUploadedImage}
                    >
                        <X className="mx-auto w-4 text-white" />
                    </div>
                )}
            </div>
            <input
                key={inputKey}
                type="file"
                name="imageUrl"
                onChange={(e) => e.target.value && onChange(e.target.value)}
                className="absolute left-0 top-0 h-full w-full cursor-pointer text-[0] opacity-0"
            />
        </div>
    );
};
