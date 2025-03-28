import React from "react";

function SingleJob({ company, role, stacks, date, imgSrc }) {
	return (
		<li className="flex justify-between gap-x-6 py-6">
			<div className="flex min-w-0 gap-x-4">
				<img className="size-12 p-1 flex-none rounded-full bg-gray-50" src={imgSrc} alt={company} />
				<div className="min-w-0 flex-auto">
					<p className="text-lg/6 sm:text-xl/6 font-medium text-gray-300">{company}</p>
					<p className="mt-1 truncate text-base/5 sm:text-lg/6 text-gray-400">{role}</p>
				</div>
			</div>
			<div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
				<p className="text-xl/6 sm:text-lg/6 text-gray-300">{stacks}</p>
				<p className="mt-1 text-base/5 text-gray-400">{date}</p>
			</div>
		</li>
	);
}

export default SingleJob;
