import { config, fields, collection, singleton } from '@keystatic/core';
import { nanoid } from 'nanoid';
import { componentBlocks } from './app/components/keystatic/component-blocks';
import { __experimental_markdoc_field } from '@keystatic/core/form/fields/markdoc';
import { Config } from '@markdoc/markdoc';

const markdocConfig: Config = {
  tags: {
    aside: {
      render: 'GoodBadComponent',
      attributes: {
        type: {
          type: String,
          required: true,
        },
        figureText: {
          type: String,
          required: false,
        },
      },
    }
  }
}

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'JacksDevPlayground',
      name: 'asStatic.Content',
    }
  },
  collections: {
    rules: collection({
      label: 'Rules',
      slugField: 'title',
      path: 'content/rules/*/',
      entryLayout: 'content',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' }, }),
        identifier: fields.text({ label: 'Identifier', defaultValue: () => nanoid(), validation: { length: { min: 6 } } }),
        content: fields.document({
          label: 'Content',
          componentBlocks,
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
    tags: collection({
      label: 'Tags',
      slugField: 'title',
      path: 'content/tags/**',
      format: { contentField: 'description' },
      schema: {
        title: fields.slug({ name: { label: 'Title' }, }),
        description: fields.document({
          label: 'Description',
          componentBlocks,
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
        image: fields.image({ label: 'Image' }),
        childCategories: fields.array(
          fields.relationship({
            label: 'Child Categories', collection: 'category',
            validation: {
              isRequired: true,
            },
          }),
          {
            label: 'Child Categories',
            itemLabel: (props) => props.value ?? 'Select a Category & Order them here',
          }),
      },
    }),
    category: collection({
      label: 'Categories',
      slugField: 'title',
      path: 'content/Categories/*/',
      format: { contentField: 'description' },
      schema: {
        title: fields.slug({ name: { label: 'Title' }, }),
        parentTags: fields.array(
          fields.relationship({
            label: 'Parent Tags', collection: 'tags',
            validation: {
              isRequired: true,
            },
          }),
          {
            label: 'Parent Tags',
            itemLabel: (props) => props.value ?? 'Select a tag',
          }),
        description: fields.document({
          label: 'Content',
          componentBlocks,
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
        image: fields.image({ label: 'Image' }),
        rules: fields.array(
          fields.relationship({
            label: 'Rules', collection: 'rules',
            validation: {
              isRequired: true,
            },
          }),
          {
            label: 'Rules',
            itemLabel: (props) => props.value ?? 'Select a rule',
          }),
      },
    }),
  },
  singletons: {
    tagOrder: singleton({
      label: 'Tag Order',
      path: 'content/order/',
      schema: {
        tags: fields.array(
          fields.relationship({
            label: 'Tags', collection: 'tags',
            validation: {
              isRequired: true,
            },
          }),
          {
            label: 'Tags',
            itemLabel: (props) => props.value ?? 'Select a tag',
          }),
      },
    }),
  }
});