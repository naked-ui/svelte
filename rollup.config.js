import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import autoPreprocess from 'svelte-preprocess';
import { terser } from 'rollup-plugin-terser';
import { sass } from 'svelte-preprocess-sass';
import pkg from './package.json';
import alias from '@rollup/plugin-alias';
import css from 'rollup-plugin-css-only'
import { join } from 'path';

const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, m => m.toUpperCase())
	.replace(/-\w/g, m => m[1].toUpperCase());

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/index.js',
	output: [
		{ file: pkg.module, 'format': 'es' },
		{ file: pkg.main, 'format': 'umd', name },
		{ file: pkg.main.replace('.js', '.min.js'), format: 'iife', name, plugins: [terser()] }
	],
	plugins: [
		svelte({
			dev: !production,
			css: css => {
				css.write('public/build/index.css');
			},
			// adding the preprocess into svelte loader
			preprocess: {
				style: sass({
					includePaths: [
						// Allow imports from 'node_modules'
						join(__dirname, 'node_modules'),
					]
				}),
			},
		}),
		css({ output: 'index.css' }),
		resolve(),
		alias({
			entries: [
				{ find: '@components', replacement: 'src/components' }
			]
		})
	]
};
