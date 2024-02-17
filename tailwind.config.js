/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
		'./error.vue',
	],
	theme: {
		fontFamily: {
			arboriaMedium: ['Arboria-Medium'],
			arboriaBook: ['Arboria-Book'],
		},
		extend: {},
	},
	plugins: [],
};
