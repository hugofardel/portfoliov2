import { ArrowUpRight, Check } from "lucide-react";

interface Props {
	company: string;
	imgSrc: string;
	role: string;
	date: string;
	description: string;
	highlights?: string[];
	tags: string[];
	image?: string;
	link?: { href: string; label: string };
	freelance?: boolean
}

function SingleJob({ company, imgSrc, role, date, description, highlights, tags, image, link, freelance }: Props) {
	return (
		<li className="flex gap-x-6 py-6 sm:py-8">
			<img className="size-12 flex-none rounded-full bg-gray-50 p-1" src={imgSrc} alt={company} />

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
						<p className="text-lg/6 sm:text-xl/6 font-medium text-gray-300 mt-1.5">{company}</p>
						<p className="mt-0.5 text-base/5 sm:text-lg/6 text-gray-400">{role}</p>
					</div>
					<p className="shrink-0 text-sm text-muted-foreground">{date}</p>
				</div>

				<p className="mt-3 text-pretty leading-relaxed text-gray-400">{description}</p>

				{highlights && highlights.length > 0 && (
					<ul className="mt-3 space-y-2">
						{highlights.map((point) => (
							<li key={point} className="flex items-center gap-2 text-base text-gray-400">
								<Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
								{point}
							</li>
						))}
					</ul>
				)}

				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<span
							key={tag}
							className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
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
						className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/70"
					>
						{link.label}
						<ArrowUpRight className="size-4" aria-hidden="true" />
					</a>
				)}
			</div>

			{image && (
				<img
					src={image}
					alt={`Aperçu du projet ${company}`}
					loading="lazy"
					className="mt-1 hidden h-32 w-44 flex-none self-start rounded-xl border border-border/60 object-cover shadow-lg md:block lg:h-36 lg:w-52"
				/>
			)}
		</li>
	);
}

export default SingleJob;
