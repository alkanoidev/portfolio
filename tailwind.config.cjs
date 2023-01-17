/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				dark: "#000",
				off: {
					white: "#dcdcdc",
					dark: "#1a1a1a",
				},
				primary: "#68af73",
				secondary: "#62aeef",
				violet: "#8b5cf6"
			},
			backgroundImage: {
				'gradient': "url('/assets/blurry-gradient-haikei.svg')",
				'gradient1': "url('/assets/blurry-gradient-haikei1.svg')",
				'gradient2': "url('/assets/blurry-gradient-haikei2.svg')",
			  }
		},
	},
	plugins: [],
}
