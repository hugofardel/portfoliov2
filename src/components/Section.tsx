import type { ComponentProps, PropsWithChildren } from "react";

interface Props {
    title: string;
    description?: string;
}

function Section({ title, description, children, ...props }: Props & PropsWithChildren & ComponentProps<'section'>) {
    return (
        <section {...props}>
            <div className="text-center py-5 sm:py-10 mt-15 sm:mt-24">
                <h2 className="text-2xl sm:text-4xl mb-1 text-ternary-light font-medium">{title}</h2>
                {description && <p className="text-gray-400 mt-2">{description}</p>}
            </div>

            {children}
        </section>
    )
}

export default Section;
