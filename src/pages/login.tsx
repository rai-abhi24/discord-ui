import backgroundImage from "@/assets/login-bg.svg";
import { LoginComponent } from "@/components/auth/login";

export const Login = () => {
    return (
        <div className="h-screen w-screen overflow-hidden">
            <img
                src={backgroundImage}
                className="absolute -z-10 h-full w-full"
            />
            <div className="h-full w-full">
                <div className="flex h-full w-full items-center justify-center">
                    <LoginComponent />
                </div>
            </div>
        </div>
    );
};
