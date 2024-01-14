import backgroundImage from "@/assets/login-bg.svg";
import { RegisterComponent } from "@/components/auth/register";

export const Register = () => {
    return (
        <div className="h-screen w-screen overflow-hidden">
            <img
                src={backgroundImage}
                className="absolute -z-10 h-full w-full"
            />
            <div className="h-full w-full">
                <div className="flex h-full w-full items-center justify-center">
                    <RegisterComponent />
                </div>
            </div>
        </div>
    );
};
