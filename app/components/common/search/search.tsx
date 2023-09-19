import { Input } from "@components/ui/input";
import { SearchIcon } from "lucide-react";

const Search = () => {
	return (
		<div className="flex flex-col items-start">
			<div className="relative w-full">
				<SearchIcon className="absolute top-0 bottom-0 my-auto w-4 h-4 text-gray-500 left-3" />
				<Input placeholder="I’m looking for..." />
			</div>
		</div>
	);
}

export default Search;