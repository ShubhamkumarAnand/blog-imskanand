import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
	name: 'default',
	title: 'imskanand_blog_backend',

	projectId: '3s5xlbp4',
	dataset: 'production',

	plugins: [deskTool(), visionTool()],

	schema: {
		types: schemaTypes,
	},
});
