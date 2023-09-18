import { DocumentRendererProps, DocumentRenderer } from "@keystatic/core/renderer";
import { getHighlighter } from "shiki";
import { ComponentBlockRenderers, Renderers } from "./renderers"

type CustomDocumentRendererProps = DocumentRendererProps & {};

export const CustomDocumentRenderer = async (props: CustomDocumentRendererProps) => {
	const highlighter = await getHighlighter({
		theme: "github-dark",
	});
	const {
		componentBlocks = ComponentBlockRenderers,
		renderers = Renderers(highlighter),
		...consumerProps
	} = props;
	return (
		<DocumentRenderer componentBlocks={componentBlocks} renderers={renderers} {...consumerProps} />
	)
}