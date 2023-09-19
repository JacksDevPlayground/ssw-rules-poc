type GreyboxProps = {
	content: any;
	figureText?: string;
}

const Greybox = ({ content, figureText }: GreyboxProps) => {
	return (
		<div className="bg-gray-200 border-2">
			{content}
			{figureText}
		</div>
	);
}

export default Greybox;