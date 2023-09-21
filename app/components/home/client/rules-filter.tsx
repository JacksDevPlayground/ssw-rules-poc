"use client"

import { ChevronDownIcon, ListFilter } from "lucide-react";
import { Toaster, toast } from "sonner";

const RulesFilter = () => {
	return (
		<>
			<Toaster position='top-right' theme="light" dir='auto' />
			<button className="flex flex-row items-center gap-2" onClick={() => toast.error('Not implemented yet')} >
				<ListFilter size="20" />
				Recently updated
				<ChevronDownIcon size="20" className="stroke-[#AAAAAA]" />
			</button>
		</>
	);
}

export default RulesFilter;