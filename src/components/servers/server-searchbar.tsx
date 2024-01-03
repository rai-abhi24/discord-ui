import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList
} from "../ui/command";

interface IServerSearchBarProps {
    data: {
        label: string;
        type: string //"channel" | "member",
        data: {
            icon: React.ReactNode;
            name: string;
            id: string;
        }[] | undefined
    }[]
}

export const ServerSearchBar = ({ data }: ServerSearchBarProps) => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    return (
        <div className="py-2">
            <button
                onClick={() => setOpen(true)}
                className="group w-full rounded-lg p-2 flex items-center gap-x-2 hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition"
            >
                <Search className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                <p
                    className="font-semibold text-sm text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition"
                >
                    Search
                </p>
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground ml-auto">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Search all channels and members" />
                <CommandList>
                    <CommandEmpty>No Results Found</CommandEmpty>
                    {data.map(({ label, type, data }) => {
                        if (!data?.length) return null;
                        return (
                            <CommandGroup key={label} heading={label}>
                                {data.map(({ id, icon, name }) => (
                                    <CommandItem className="cursor-pointer">
                                        {icon}
                                        <span>{name}</span>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        )
                    })}
                </CommandList>
            </CommandDialog>
        </div>
    );
};
