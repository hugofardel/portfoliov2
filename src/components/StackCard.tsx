interface Props {
	icon: string;
	name: string;
}

function StackCard({ icon, name }: Props) {
	return (
		<div className="group relative rounded-xl bg-card border border-border/60 overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5">
			<div className="w-full mt-8 sm:mt-0 flex items-center justify-center px-4 pt-6 pb-5">
				<img
					src={icon}
					className="rounded-t-xl drop-shadow-md border-none size-16 transition-transform duration-300 group-hover:scale-110"
					alt={name}
				/>
			</div>
			<div className="text-center px-4 pb-6">
				<p className="font-medium text-lg md:text-xl text-gray-300 transition-colors duration-300 group-hover:text-foreground">
					{name}
				</p>
			</div>
		</div>
	);
}

export default StackCard;
