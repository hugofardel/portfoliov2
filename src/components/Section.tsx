import type { PropsWithChildren } from "react";
import React from "react";

interface Props {
    title: string;
    description?: string;
}

function Section({ title, description, children, ...props }: Props & PropsWithChildren & React.ComponentProps<'section'>) {
    return (
        <section {...props}>
            <div className="text-center mb-8 py-5 sm:py-10 mt-5 sm:mt-24">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

            {children}
        </section>
    )
}

export default Section;