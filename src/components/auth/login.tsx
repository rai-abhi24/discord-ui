import { Star } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export const LoginComponent = () => {
    const form = useForm();
    return (
        <div className="rounded-sm bg-[#313338] p-8 max-[485px]:w-full md:w-[500px] motion-safe:animate-login">
            <div className="mb-6 space-y-2">
                <div className="w-full text-center text-2xl font-semibold">
                    Welcome back!
                </div>
                <div className="text-md w-full text-center text-zinc-400">
                    We're excited to see you again!
                </div>
            </div>
            <div className="space-y-6">
                <div className="space-y-2">
                    <p className="flex items-start gap-x-1 text-xs font-semibold uppercase text-[#B1B6BD]">
                        Email or phone number{" "}
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
                                                placeholder="Enter your email"
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
                                name="email"
                                control={form.control}
                                render={() => (
                                    <FormItem>
                                        <FormControl>
                                            <div>
                                                <Input
                                                    type="password"
                                                    className="border-0 bg-[#1E1F22] text-zinc-300 focus-visible:ring-0 focus-visible:ring-offset-0"
                                                    placeholder="Enter your password"
                                                    autoComplete="off"
                                                />
                                                <Link
                                                    to="#"
                                                    className="pl-0.5 text-[13px] text-sky-400 hover:underline"
                                                >
                                                    Forgot you password?
                                                </Link>
                                            </div>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </form>
                    </Form>
                </div>
                <div className="space-y-2">
                    <Button variant="primary" className="w-full">
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
            </div>
        </div>
    );
};
