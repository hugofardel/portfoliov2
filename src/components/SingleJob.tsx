import type { Job } from "@/data/jobs";
import { ArrowUpRight, Check, ChevronDown } from "lucide-react";


function SingleJob({ company, imgSrc, role, date, description, highlights, tags, link, freelance }: Job) {
	return (
		<li className="relative flex gap-x-4 py-6 pl-12 sm:gap-x-6 sm:py-8 sm:pl-16 group">
			<span
				aria-hidden="true"
				className="absolute top-[46px] left-[9px] size-2 rounded-full bg-primary ring-4 ring-background sm:top-[54px] group-hover:shadow-lg group-hover:shadow-primary/30 transition-shadow duration-300"
			/>
			<img
				className="mt-0.5 size-12 flex-none self-start object-contain drop-shadow"
				src={imgSrc}
				alt={company}
			/>

			<div className="min-w-0 flex-1">
				<div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
					<div className="min-w-0">
						{freelance &&
							<span
								className="rounded-md bg-primary/10 px-2.5 py-1 text-sm uppercase font-medium text-primary"
							>
								freelance
							</span>
						}
						<p className="mt-1.5 text-lg/6 sm:text-xl/6 font-medium text-gray-300">{company}</p>
						<p className="mt-0.5 text-base/5 sm:text-lg/6 text-gray-400">{role}</p>
					</div>
					<p className="shrink-0 text-sm text-muted-foreground">{date}</p>
				</div>

				<p className="mt-3 text-pretty leading-relaxed text-gray-300">{description}</p>

				{highlights && highlights.length > 0 && (
					<details className="group/expand mt-3">
						<summary className="flex w-fit cursor-pointer list-none items-center gap-1.5 text-sm font-medium text-gray-400 transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
							En savoir plus
							<ChevronDown className="size-4 transition-transform duration-200 group-open/expand:rotate-180" aria-hidden="true" />
						</summary>
						<ul className="mt-3 space-y-2">
							{highlights.map((point) => (
								<li key={point} className="flex items-center gap-2 text-base text-gray-400">
									<Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
									{point}
								</li>
							))}
						</ul>
					</details>
				)}

				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<span
							key={tag}
							className="rounded-md border border-primary/15 bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary/80"
						>
							{tag}
						</span>
					))}
				</div>

				{link && (
					<a
						href={link.href}
						target="_blank"
						rel="noreferrer"
						className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 transition-colors hover:text-primary/70 hover:underline"
					>
						{link.label}
						<ArrowUpRight className="size-4" aria-hidden="true" />
					</a>
				)}
			</div>
		</li>
	);
}

export default SingleJob;
