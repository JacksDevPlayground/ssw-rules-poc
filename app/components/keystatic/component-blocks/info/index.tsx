import { component, fields } from '@keystatic/core';
import Info from './info';

export const InfoComponent = component({
	preview: ({ fields }) => <Info content={fields.content.element} figureText={fields.figureText?.value} />,
	label: 'Info',
	schema: {
		content: fields.child({
			kind: 'block',
			placeholder: 'Info...',
			formatting: 'inherit',
		}),
		figureText: fields.text({ label: 'Figure Text', description: 'Pre-text that is bolded.' }),
	},
	chromeless: false,
});
