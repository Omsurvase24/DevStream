import { Logo } from "./_component/logo";

const AuthLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full flex flex-col items-center justify-center space-y-6">
            <Logo />
            {children}
        </div>
    );
};

export default AuthLayout;