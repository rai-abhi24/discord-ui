import { zodResolver } from "@hookform/resolvers/zod";
import { Star } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as z from "zod";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
});

export const LoginComponent = () => {
    const defaultValues: z.infer<typeof formSchema> = {
        email: "",
        password: "",
    };

    const form = useForm<z.infer<typeof formSchema>>({
        defaultValues: defaultValues,
        resolver: zodResolver(formSchema),
    });

    const handleSubmit = (values: z.infer<typeof formSchema>): void => {
        console.log(values);
    };

    return (
        <div className="motion-safe:animate-login rounded-sm bg-[#313338] p-8 max-[485px]:w-full md:w-[500px]">
            <div className="mb-6 space-y-2">
                <div className="w-full text-center text-2xl font-semibold text-white">
                    Welcome back!
                </div>
                <div className="text-md w-full text-center text-zinc-400">
                    We're so excited to see you again!
                </div>
            </div>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="space-y-6"
                >
                    <FormField
                        name="email"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <div className="flex items-center">
                                    <FormLabel
                                        className={`flex items-start gap-x-1 text-xs font-semibold uppercase text-[#B1B6BD] ${
                                            form.formState.errors.email
                                                ? "text-red-400"
                                                : ""
                                        }`}
                                    >
                                        Email or phone number{" "}
                                        {!form.formState.errors.email && (
                                            <Star
                                                stroke="#ff0000"
                                                fill="#ff0000"
                                                className="h-[5px] w-[5px]"
                                            />
                                        )}
                                    </FormLabel>
                                    {form.formState.errors.email && (
                                        <p className="text-xs font-normal italic text-red-400">
                                            - Login Id or password is invalid.
                                        </p>
                                    )}
                                </div>
                                <FormControl>
                                    <Input
                                        type="email"
                                        className="border-0 bg-[#1E1F22] text-zinc-300 focus-visible:ring-0 focus-visible:ring-offset-0"
                                        required
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
                                <div className="flex items-center">
                                    <FormLabel
                                        className={`flex items-start gap-x-1 text-xs font-semibold uppercase text-[#B1B6BD] ${
                                            form.formState.errors.password
                                                ? "text-red-400"
                                                : ""
                                        }`}
                                    >
                                        Password{" "}
                                        {!form.formState.errors.password && (
                                            <Star
                                                stroke="#ff0000"
                                                fill="#ff0000"
                                                className="h-[5px] w-[5px]"
                                            />
                                        )}
                                    </FormLabel>
                                    {form.formState.errors.password && (
                                        <p className="text-xs font-normal italic text-red-400">
                                            - Login Id or password is invalid.
                                        </p>
                                    )}
                                </div>
                                <FormControl>
                                    <div>
                                        <Input
                                            type="password"
                                            className="border-0 bg-[#1E1F22] text-zinc-300 focus-visible:ring-0 focus-visible:ring-offset-0"
                                            autoComplete="off"
                                            {...field}
                                        />
                                        <Link
                                            to="forgot-password"
                                            className="pl-0.5 text-[13px] text-sky-400 hover:underline"
                                        >
                                            Forgot you password?
                                        </Link>
                                    </div>
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <div className="mt-6 space-y-2">
                        <Button
                            variant="primary"
                            className="w-full"
                            type="submit"
                        >
                            Login
                        </Button>
                        <p className="text-[13px] text-zinc-400">
                            Need an account?
                            <Link
                                to="/register"
                                className="pl-0.5 text-[13px] text-sky-400 hover:underline"
                            >
                                Register
                            </Link>
                        </p>
                    </div>
                </form>
            </Form>
        </div>
    );
};
