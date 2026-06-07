interface Props {
	icon: string;
	name: string;
}

function StackCard({ icon, name }: Props) {
	return (
		<div className="rounded-xl shadow-lg bg-card">
			<div className="w-full mt-8 sm:mt-0 flex items-center justify-center px-4 pt-6 pb-5">
				<img
					src={icon}
					className="rounded-t-xl drop-shadow-md drop-shadow-gray-100/10 border-none size-16"
					alt={name}
				/>
			</div>
			<div className="text-center px-4 pb-6">
				<p className="font-medium text-lg md:text-xl text-gray-300">{name}</p>
			</div>
		</div>
	);
}

export default StackCard;
