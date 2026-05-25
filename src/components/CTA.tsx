import { cn } from "@/lib/utils";

export default function CTA({ className, children, ...props }: React.ComponentProps<"a">) {
    return (
        <a
            className={cn("flex justify-center items-center",
                "mt-12 mb-6 sm:mb-0 p-2.5 sm:p-3 cursor-pointer",
                "font-medium text-lg border border-border shadow-lg rounded-lg",
                "bg-primary text-primary-foreground focus:ring-1 focus:ring-primary/10 hover:bg-primary/50 duration-500",
                className)}
            {...props}>
            {children}
        </a>
    )
}