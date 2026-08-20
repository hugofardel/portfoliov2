import Section from "@/components/Section";
import SingleJob from "@/components/SingleJob";
import { jobs } from "@/data/jobs";

function Jobs() {
	return (
		<Section title="Mes expériences">
			<ul className="relative">
				<div
					aria-hidden="true"
					className="absolute inset-y-2 left-[13px] w-px bg-primary/50"
				/>

				{jobs.map((job) => (
					<SingleJob key={job.id} {...job} />
				))}
			</ul>
		</Section>
	);
}

export default Jobs;
