import { Hash } from "lucide-react"

export const ChatWelcome = () => {
    return (
        <div className="px-4 space-y-2 mb-4">
            <div className="bg-zinc-500 dark:bg-zinc-700 w-16 h-16 rounded-full flex justify-center items-center">
                <Hash className="w-10 h-10"/>
            </div>
            <p className="text-white text-xl md:text-3xl font-bold font-custom">Welcome to</p>
        </div>
    )
}