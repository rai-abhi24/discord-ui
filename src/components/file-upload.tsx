import { X } from "lucide-react";
import fileUploadIcon from "@/assets/file-upload.svg";
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
        <div className="w-[80px] h-[80px] relative">
            <div>
                <img
                    src={fileSrc}
                    alt={value ? "Uploaded Image" : "File Upload Icon"}
                    className={`text-[12px] w-full h-full ${value ? "rounded-full" : ""
                        } fill-white`}
                />
                {value && (
                    <div
                        className="absolute top-0 right-0 bg-red-500/90 rounded-full w-6 h-6 z-10"
                        role="button"
                        onClick={removeUploadedImage}
                    >
                        <X className="text-white w-4 mx-auto" />
                    </div>
                )}
            </div>
            <input
                key={inputKey}
                type="file"
                name="imageUrl"
                onChange={(e) => e.target.value && onChange(e.target.value)}
                className="absolute top-0 left-0 w-full h-full text-[0] opacity-0 cursor-pointer"
            />
        </div>
    );
};
