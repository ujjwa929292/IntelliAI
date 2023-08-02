import Image from "next/image";

export const Loader = () => {
    return ( 
        <div className="h-full flex flex-col gay-y-4 items-center justify-center">
            <div className="w-10 h-10 relative animate-spin">
                <Image
                alt="Logo"
                fill
                src="/Logo.png"
                />
            </div>
            <p className="text-sm text-muted-foreground">
                IntelliAI is thinking...
            </p>
        </div>
     );
}
 