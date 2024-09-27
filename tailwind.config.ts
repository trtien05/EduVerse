import type { Config } from "tailwindcss";
import { withUt } from "uploadthing/tw";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				'3xl': '1600px'
			},
			colors: {
				primary: '#4E06FE',
				grayDarkest: '#131316',
				grayDarker: '#212126',
				grayDark: '#9394A1'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},

			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			fontFamily: {
				primary: ['var(--font-manrope)']
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default withUt(config);
