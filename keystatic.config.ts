import { config, fields, collection, singleton, GitHubConfig, LocalConfig } from '@keystatic/core';
import { nanoid } from 'nanoid';
import { componentBlocks } from './app/components/keystatic/component-blocks';

const storage: LocalConfig['storage'] | GitHubConfig['storage'] =
  process.env.NODE_ENV === 'development'
    ? { kind: 'local' }
    : {
      kind: 'github',
      repo: {
        owner: process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER!,
        name: process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG!,
      },
    }

export default config({
  storage,
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
        dateCreated: fields.text({ label: 'Date Created', defaultValue: new Date().toISOString() }),
        lastUpdated: fields.text({ label: 'Last Updated', defaultValue: new Date().toISOString() }),
        archive: fields.text({ label: 'Archive Reason' }),
        blurb: fields.document({
          label: 'Blurb',
          componentBlocks,
          tables: true,
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
        content: fields.document({
          label: 'Content',
          componentBlocks,
          tables: true,
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
        acknowledgements: fields.array(
          fields.object({
            name: fields.text({ label: 'Name' }),
            url: fields.text({ label: 'SSW People Profile URL' }),
          }),
          {
            label: 'Acknowledgements',
            itemLabel: (props) => props.fields.name.value ?? 'Enter an acknowledgement',
          }),
        related: fields.array(
          fields.relationship({
            label: 'Related Rules', collection: 'rules',
            validation: {
              isRequired: true,
            },
          }),
          {
            label: 'Related Rules',
            itemLabel: (props) => props.value ?? 'Select a rule',
          }),
        redirects: fields.array(
          fields.text({ label: 'Redirects' }),
          {
            label: 'Redirects',
            itemLabel: (props) => props.value ?? 'Enter a redirect',
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