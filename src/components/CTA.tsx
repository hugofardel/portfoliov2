import { cn } from "@/lib/utils";

export default function CTA({ className, children, ...props }: React.ComponentProps<"a">) {
    return (
        <a className={cn("font-medium flex justify-center items-center mt-12 mb-6 sm:mb-0 text-lg border border-ternary-dark p-2.5 sm:p-3 shadow-lg rounded-lg bg-gray-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500", className)} {...props}>
            {children}
        </a>
    )
}