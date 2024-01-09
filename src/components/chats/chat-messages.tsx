import { ChatWelcome } from "./chat-welcome";

export const ChatMessages = () => {
    return (
        <div className="flex flex-1 flex-col overflow-y-auto py-4">
            <div className="flex-1" />
            <ChatWelcome />
        </div>
    );
};
