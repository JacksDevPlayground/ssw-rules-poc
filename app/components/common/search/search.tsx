import { Input } from "@components/ui/input";
import { cn } from "@lib/utils";
import { SearchIcon } from "lucide-react";

type SearchProps = {
	className?: string;
}

const Search = ({ className }: SearchProps) => {
	return (
		<div className={cn("flex flex-col items-start", className)}>
			<div className="relative w-full">
				<SearchIcon className="absolute top-0 bottom-0 my-auto w-4 h-4 text-gray-500 left-3 " />
				<Input placeholder="I’m looking for..." className=" focus-visible:border-b-2 focus-visible:border-b-[#cc4141]" />
			</div>
		</div>
	);
}

export default Search;