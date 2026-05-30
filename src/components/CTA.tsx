import { cn } from "@/lib/utils";
import { NavLink, type NavLinkProps } from "react-router";

export default function CTA({ className, to, children, ...props }: React.ComponentProps<"a"> & NavLinkProps) {
    return (
        <NavLink
            to={to}
            className={cn("flex justify-center items-center",
                "p-2.5 sm:p-3 cursor-pointer",
                "font-medium text-lg border border-border shadow-lg rounded-lg",
                "bg-primary text-primary-foreground focus:ring-1 focus:ring-primary/10 hover:bg-primary/50 duration-500",
                className)}
            {...props}>
            {children}
        </NavLink>
    )
}