import { CalendarIcon, Star } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils/utils";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns"
import { useState } from "react";

export const RegisterComponent = () => {
    const form = useForm();
    const [date, setDate] = useState<Date>()

    return (
        <div className="rounded-sm bg-[#313338] p-8 max-[485px]:w-full md:w-[475px] motion-safe:animate-login">
            <div className="mb-6">
                <div className="w-full text-center text-2xl font-semibold">
                    Create an account
                </div>
            </div>
            <div className="space-y-6">
                <div className="space-y-2">
                    <p className="flex items-start gap-x-1 text-xs font-semibold uppercase text-[#B1B6BD]">
                        Email{" "}
                        <Star
                            stroke="#ff0000"
                            fill="#ff0000"
                            className="h-[5px] w-[5px]"
                        />
                    </p>
                    <Form {...form}>
                        <form>
                            <FormField
                                name="email"
                                control={form.control}
                                render={() => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                className="border-0 bg-[#1E1F22] text-zinc-300 focus-visible:ring-0 focus-visible:ring-offset-0"
                                                placeholder="Enter email"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </form>
                    </Form>
                </div>
                <div className="space-y-2">
                    <Label className="flex items-start gap-x-1 text-xs font-semibold uppercase text-[#B1B6BD]">
                        Display Name
                    </Label>
                    <Form {...form}>
                        <form>
                            <FormField
                                name="displayName"
                                control={form.control}
                                render={() => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                className="border-0 bg-[#1E1F22] text-zinc-300 focus-visible:ring-0 focus-visible:ring-offset-0"
                                                placeholder="Enter name"
                                                autoComplete="off"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </form>
                    </Form>
                </div>
                <div className="space-y-2">
                    <Label className="flex items-start gap-x-1 text-xs font-semibold uppercase text-[#B1B6BD]">
                        Username{" "}
                        <Star
                            stroke="#ff0000"
                            fill="#ff0000"
                            className="h-[5px] w-[5px]"
                        />
                    </Label>
                    <Form {...form}>
                        <form>
                            <FormField
                                name="username"
                                control={form.control}
                                render={() => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                className="border-0 bg-[#1E1F22] text-zinc-300 focus-visible:ring-0 focus-visible:ring-offset-0"
                                                placeholder="Enter username"
                                                autoComplete="off"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </form>
                    </Form>
                </div>
                <div className="space-y-2">
                    <Label className="flex items-start gap-x-1 text-xs font-semibold uppercase text-[#B1B6BD]">
                        Password{" "}
                        <Star
                            stroke="#ff0000"
                            fill="#ff0000"
                            className="h-[5px] w-[5px]"
                        />
                    </Label>
                    <Form {...form}>
                        <form>
                            <FormField
                                name="password"
                                control={form.control}
                                render={() => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                className="border-0 bg-[#1E1F22] text-zinc-300 focus-visible:ring-0 focus-visible:ring-offset-0"
                                                placeholder="Enter password"
                                                autoComplete="off"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </form>
                    </Form>
                </div>
                <div className="space-y-2">
                    <Label className="flex items-start gap-x-1 text-xs font-semibold uppercase text-[#B1B6BD]">
                        Date of birth{" "}
                        <Star
                            stroke="#ff0000"
                            fill="#ff0000"
                            className="h-[5px] w-[5px]"
                        />
                    </Label>
                    <Form {...form}>
                        <form>
                            <FormField
                                name="dob"
                                control={form.control}
                                render={() => (
                                    <FormItem>
                                        <FormControl>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-full justify-start text-left font-normal",
                                                            !date && "bg-[#1E1F22]"
                                                        )}
                                                    >
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        {date ? format(date, "PPP") : <span className="text-zinc-300">Pick a date</span>}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0">
                                                    <Calendar
                                                        mode="single"
                                                        selected={date}
                                                        onSelect={setDate}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </form>
                    </Form>
                </div>
                <div className="space-y-2 mb-1">
                    <Button variant="primary" className="w-full">
                        Continue
                    </Button>
                    <p
                        className="pl-0.5 text-[11px] text-gray-400"
                    >
                        By registering, you agree to our <span className="text-sky-400 hover:underline">Terms of Service</span> and <span className="text-sky-400 hover:underline">Privacy Policy</span>.
                    </p>
                    <div>
                        <Link
                            to="/login"
                            className="pl-0.5 text-[13px] text-sky-400 hover:underline"
                        >
                            Already have an account?
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
