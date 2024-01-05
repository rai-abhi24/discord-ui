import { ChatWelcome } from "./chat-welcome"

export const ChatMessages = () => {
    return (
        <div className="flex-1 flex flex-col py-4 overflow-y-auto">
            <div className="flex-1" />
            <ChatWelcome />
        </div>
    )
}