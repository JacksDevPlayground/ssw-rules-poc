import { component, fields } from '@keystatic/core';
import Aside from './aside';

export const AsideComponent = component({
	preview: ({ fields }) => <Aside content={fields.content.element} type={fields.type.value} figureText={fields.figureText?.value} />,
	label: 'Aside',
	schema: {
		type: fields.select({
			label: 'Type',
			description: 'Aside type',
			options: [
				{ label: 'Info', value: 'info' },
				{ label: 'China', value: 'china' },
				{ label: 'Codeauditor', value: 'codeauditor' },
				{ label: 'TODO', value: 'todo' },
				{ label: 'Warning', value: 'warning' },
			],
			defaultValue: 'info',
		}),
		content: fields.child({
			kind: 'block',
			placeholder: 'Enter Aside Content...',
			formatting: 'inherit',
		}),
		figureText: fields.text({ label: 'Figure Text', description: 'Pre-text that is bolded.' }),
	},
	chromeless: false,
});
