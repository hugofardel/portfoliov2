function TarifCard({ title, description, price, children }) {
	return (
		<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-ternary-dark p-4 sm:p-8 h-full border-1 border-gray-600">
			<div className="text-lg/6 sm:text-xl/6 font-medium text-white">{title}</div>
			<div className="text-pretty mt-1 text-base/6 text-gray-400">{description}</div>
			<div className="my-12 font-semibold text-gray-300">
				A partir de
				<span className="text-xl/6 sm:text-3xl/6 text-indigo-400">{" " + price}</span>
			</div>
			{children}
		</div>
	);
}

export default TarifCard;
