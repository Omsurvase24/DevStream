"use client";

import { ReceivedChatMessage } from "@livekit/components-react";
import { ChatMessage } from "./chat-message";
import { Skeleton } from "../ui/skeleton";

interface ChatListProps {
    message: ReceivedChatMessage[];
    isHidden: boolean;
}

export const ChatList = ({
    message,
    isHidden
}: ChatListProps) => {
    if (isHidden || !message || message.length === 0) {
        return (
            <div className="flex flex-1 items-center justify-center">
                <p className="text-sm text-muted-foreground">
                    {isHidden ? "Chat is Disabled" : "Welcome to The Chat"}
                </p>
            </div>
        )
    }


    return (
        <div className="flex flex-1 flex-col-reverse overflow-y-auto p-3 h-full">
            {message.map((message) => (
                <ChatMessage
                    key={message.timestamp}
                    data={message}
                />
            ))}
        </div>
    )
}

export const ChatListSkeleton = () => {
    return (
        <div className="flex h-full items-center justify-center">
            <Skeleton className="w-1/2 h-6" />
        </div>
    )
}