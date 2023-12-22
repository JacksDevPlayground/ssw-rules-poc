import { component, fields } from "@keystatic/core";
import CustomImage from "./custom-image";

export const CustomImageComponent = component({
	preview: ({ fields }) => <CustomImage type={fields.type.value} image={fields.image.value?.filename || null} />,
	label: 'Custom Image',
	schema: {
		type: fields.select({
			label: 'Type',
			description: 'Image type',
			options: [
				{ label: 'Small', value: 'small' },
				{ label: 'Medium', value: 'medium' },
				{ label: 'Large', value: 'large' },
				{ label: 'No Border', value: 'noborder' },
			],
			defaultValue: 'noborder',
		}),
		image: fields.image({
			label: 'Image',
			description: 'Image to display',
			directory: 'public/rules',
			publicPath: '/rules/'
		}),
	},
	chromeless: false,
});
