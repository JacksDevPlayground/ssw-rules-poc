import { BadgeInfo } from "lucide-react";

type InfoProps = {
	figureText?: string;
	content: any;
};

const Info = ({ figureText, content }: InfoProps) => {
	return (
		<div className="border border-grey-300 p-5">
            <div className="flex items-center">
                <BadgeInfo className="fill-red-500 stroke-white" />
                <span className="text-md"><strong>{figureText}:</strong></span>
            </div>
            <div>{content}</div>
		</div>
	);
}

export default Info;
