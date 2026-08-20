import type { ComponentProps, ElementType, PropsWithChildren } from "react";

type ButtonProps<T extends ElementType = "button"> = {
	as?: T;
} & PropsWithChildren<ComponentProps<T>>;

const baseStyles =
	"inline-flex items-center gap-2.5 cursor-pointer px-8 py-3 font-semibold text-lg rounded-xl bg-primary text-primary-foreground shadow-sm shadow-primary/40 hover:shadow-primary/40 hover:bg-primary/80 active:scale-[0.98] transition-all duration-300";

function Button<T extends ElementType = "button">({
	as,
	children,
	className,
	...props
}: ButtonProps<T>) {
	const Component = as || "button";

	return (
		<Component className={`${baseStyles} ${className ?? ""}`} {...props}>
			{children}
		</Component>
	);
}

export default Button;
