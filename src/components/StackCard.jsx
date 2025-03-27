import React from "react";

function StackCard({ icon, name }) {
	return (
		<div className="rounded-xl shadow-lg mb-10 sm:mb-0 bg-ternary-dark">
			<div className="w-full mt-8 sm:mt-0 flex items-center justify-center px-4 pt-6 pb-5">
				<img src={icon} className="rounded-t-xl border-none size-16" alt={name} />
			</div>
			<div className="text-center px-4 pb-6">
				<p className="font-general-medium text-lg md:text-xl text-ternary-light">{name}</p>
			</div>
		</div>
	);
}

export default StackCard;
