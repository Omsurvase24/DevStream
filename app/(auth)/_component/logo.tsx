import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
    return (
        <div className="flex flex-col items-center gap-y-2">
            <div className="bg-white rounded-full p-1">
                <Image src="/penguin.svg" alt="DevStream" height="50" width="50" />
            </div>
            <div className={cn(
                "flex flex-col items-center",
                font.className,
            )}>
                <p className="text-xl font-semibold">
                    DevStream
                </p>
                <p className="text-sm text-muted-foreground">
                    Know Code
                </p>
            </div>
        </div>
    )
}
