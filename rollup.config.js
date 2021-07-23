import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';
import sveltePreprocess from 'svelte-preprocess';
import alias from '@rollup/plugin-alias';
import css from 'rollup-plugin-css-only'

const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, m => m.toUpperCase())
	.replace(/-\w/g, m => m[1].toUpperCase());

const production = !process.env.ROLLUP_WATCH

export default {
	input: 'src/index.js',
	output: [
		{ file: pkg.module, 'format': 'es' },
		{ file: pkg.main, 'format': 'umd', name },
		{ file: pkg.main.replace('.js', '.min.js'), format: 'iife', name, plugins: [terser()] }
	],
	plugins: [
		svelte({
			preprocess: sveltePreprocess(
				{
					sourceMap: !production,
					postcss: {
						plugins: [require('autoprefixer')()]
					}
				}
			),
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
