import { Check } from "lucide-react";
import type { PropsWithChildren } from "react";

function TarifItem({ children }: PropsWithChildren) {
	return (
		<li className="flex items-center gap-x-3">
			<Check className="size-4 text-indigo-400" /> {children}
		</li>
	);
}

export default TarifItem;
