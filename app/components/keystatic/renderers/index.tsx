import { InferRenderersForComponentBlocks } from "@keystatic/core";
import { DocumentRendererProps } from "@keystatic/core/renderer";
import { Highlighter } from "shiki";
import { componentBlocks } from "../component-blocks";
import { Tweet } from "react-tweet";
import { Code } from "./code/code";
import { InlineCode } from "./code/inline-code";
import { Image } from "./image/image";
import { Heading } from "./heading";
import GoodBad from "../component-blocks/good-bad/good-bad";
import GoodBadImage from "../component-blocks/good-bad-image/good-bad-image";
import YouTubeVideo from "../component-blocks/youtube-video/youtube-video";
import EmailTemplate from "../component-blocks/email-template/email-template";
import Aside from "../component-blocks/aside/aside";
import Greybox from "../component-blocks/greybox/greybox";

/**
 * Override default renderers provided by @keystatic/core/renderer
 */
export const Renderers = (highligher: Highlighter) => {
	return {
		block: {
			heading(props) {
				return <Heading {...props} />;
			},
			code(props) {
				return <Code {...props} highlighter={highligher} />;
			},
			image(props) {
				return <Image {...props} />;
			},
		},
		inline: {
			code(props) {
				return <InlineCode {...props} />;
			}
		},
	} satisfies DocumentRendererProps['renderers'];
};

/**
 * Custom Block Renders 
 */
export const ComponentBlockRenderers = {
	TweetComponent: (props) =>
	(
		<div className="not-prose">
			<Tweet {...props} />
		</div>
	),
	GoodBadComponent: (props) => <GoodBad {...props} />,
	GoodBadImageComponent: (props) => <GoodBadImage {...props} />,
	YoutubeVideoComponent: (props) => <YouTubeVideo {...props} />,
	EmailTemplateComponent: (props) => <EmailTemplate {...props} />,
	AsideComponent: (props) => <Aside {...props} />,
	GreyboxComponent: (props) => <Greybox {...props} />,
} satisfies InferRenderersForComponentBlocks<typeof componentBlocks>;
