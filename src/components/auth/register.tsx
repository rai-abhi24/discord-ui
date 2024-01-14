import { cn } from "@/lib/utils/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { CalendarIcon, Star } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as z from "zod";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export const RegisterComponent = () => {
    const formSchema = z.object({
        email: z.string().email(),
        displayName: z.string(),
        userName: z.string().min(1),
        password: z.string().min(1),
        dateOfBirth: z
            .date()
            .optional()
            .refine((date) => {
                if (date === undefined) return false;
                return true;
            }),
    });

    const defaultValues: z.infer<typeof formSchema> = {
        email: "",
        displayName: "",
        userName: "",
        password: "",
        dateOfBirth: undefined,
    };

    const form = useForm<z.infer<typeof formSchema>>({
        defaultValues: defaultValues,
        resolver: zodResolver(formSchema),
    });

    const handleSubmit = (values: z.infer<typeof formSchema>): void => {
        console.log(values);
    };

    return (
        <div className="motion-safe:animate-login rounded-sm bg-[#313338] p-8 max-[485px]:w-full md:w-[485px]">
            <div className="mb-6">
                <div className="w-full text-center text-2xl font-semibold text-white">
                    Create an account
                </div>
            </div>
            <div className="space-y-6">
                <div className="space-y-2">
                    <Form {...form}>
                        <form
                            className="space-y-6"
                            onSubmit={form.handleSubmit(handleSubmit)}
                        >
                            <FormField
                                name="email"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel
                                            className={`flex items-start gap-x-1 text-xs font-semibold uppercase text-[#B1B6BD] ${
                                                form.formState.errors.email
                                                    ? "text-red-400"
                                                    : ""
                                            }`}
                                        >
                                            Email{" "}
                                            {!form.formState.errors.email ? (
                                                <Star
                                                    stroke="#ff0000"
                                                    fill="#ff0000"
                                                    className="h-[5px] w-[5px]"
                                                />
                                            ) : (
                                                <p className="font-normal capitalize italic">
                                                    - required
                                                </p>
                                            )}
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                className="border-0 bg-[#1E1F22] text-zinc-300 focus-visible:ring-0 focus-visible:ring-offset-0"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="displayName"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="group">
                                        <FormLabel className="flex items-start gap-x-1 text-xs font-semibold uppercase text-[#B1B6BD]">
                                            Display Name{" "}
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                className="border-0 bg-[#1E1F22] text-zinc-300 focus-visible:ring-0 focus-visible:ring-offset-0"
                                                {...field}
                                            />
                                        </FormControl>
                                        {form.watch("displayName") && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -50 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -50 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <p>
                                                    This is your animated
                                                    content.
                                                </p>
                                            </motion.div>
                                        )}
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="userName"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel
                                            className={cn(
                                                "flex items-start gap-x-1 text-xs font-semibold uppercase text-[#B1B6BD]",
                                                form.formState.errors
                                                    .userName && "text-red-400",
                                            )}
                                        >
                                            UserName{" "}
                                            {!form.formState.errors.userName ? (
                                                <Star
                                                    stroke="#ff0000"
                                                    fill="#ff0000"
                                                    className="h-[5px] w-[5px]"
                                                />
                                            ) : (
                                                <p className="font-normal capitalize italic">
                                                    - required
                                                </p>
                                            )}
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                className="border-0 bg-[#1E1F22] text-zinc-300 focus-visible:ring-0 focus-visible:ring-offset-0"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="password"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel
                                            className={cn(
                                                "flex items-start gap-x-1 text-xs font-semibold uppercase text-[#B1B6BD]",
                                                form.formState.errors
                                                    .password && "text-red-400",
                                            )}
                                        >
                                            password{" "}
                                            {!form.formState.errors.password ? (
                                                <Star
                                                    stroke="#ff0000"
                                                    fill="#ff0000"
                                                    className="h-[5px] w-[5px]"
                                                />
                                            ) : (
                                                <p className="font-normal capitalize italic">
                                                    - required
                                                </p>
                                            )}
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                className="border-0 bg-[#1E1F22] text-zinc-300 focus-visible:ring-0 focus-visible:ring-offset-0"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="dateOfBirth"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel
                                            className={cn(
                                                "flex items-start gap-x-1 text-xs font-semibold uppercase text-[#B1B6BD]",
                                                form.formState.errors
                                                    .dateOfBirth &&
                                                    "text-red-400",
                                            )}
                                        >
                                            Date Of Birth{" "}
                                            {!form.formState.errors
                                                .dateOfBirth ? (
                                                <Star
                                                    stroke="#ff0000"
                                                    fill="#ff0000"
                                                    className="h-[5px] w-[5px]"
                                                />
                                            ) : (
                                                <p className="font-normal capitalize italic">
                                                    - required
                                                </p>
                                            )}
                                        </FormLabel>
                                        <FormControl>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-full justify-start bg-[#1E1F22] text-left font-normal text-zinc-300 hover:bg-[#1E1F22] ",
                                                            !field.value &&
                                                                "text-muted-foreground",
                                                        )}
                                                    >
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        {field.value ? (
                                                            format(
                                                                field.value,
                                                                "PPP",
                                                            )
                                                        ) : (
                                                            <span>
                                                                Pick a date
                                                            </span>
                                                        )}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto bg-[#1E1F22] p-0 text-zinc-300 ">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={
                                                            field.onChange
                                                        }
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <div className="mb-1 space-y-2">
                                <Button variant="primary" className="w-full">
                                    Continue
                                </Button>
                                <p className="pl-0.5 text-[11px] text-gray-400">
                                    By registering, you agree to our{" "}
                                    <span className="text-sky-400 hover:underline">
                                        Terms of Service
                                    </span>{" "}
                                    and{" "}
                                    <span className="text-sky-400 hover:underline">
                                        Privacy Policy
                                    </span>
                                    .
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
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
};
