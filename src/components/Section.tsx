import type { PropsWithChildren } from "react";
import React from "react";

interface Props {
    title: string;
    description?: string;
}

function Section({ title, description, children, ...props }: Props & PropsWithChildren & React.ComponentProps<'section'>) {
    return (
        <section {...props}>
            <div className="text-center py-5 sm:py-10 mt-15 sm:mt-24">
                <h2>{title}</h2>
                {description && <p className="text-gray-400 mt-2">{description}</p>}
            </div>

            {children}
        </section>
    )
}

export default Section;
