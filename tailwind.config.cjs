/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				'betterhover': {'raw': '(hover: hover)'},
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				vianumun2023: {
					primary: '#1D423A',
                    "primary-content": '#fff',
					secondary: '#356359',
                    "secondary-content": '#fff',
                  	accent: '#162F29',
                  	"accent-content": '#fff',
					neutral: '#548278',
                    "neutral-content": '#1d423a',
					'base-100': '#FFFFFF',
					'base-200': '#E5F2DE',
					info: '#3ABFF8',
					success: '#36D399',
					warning: '#FBBD23',
					error: '#F87272'
				}
			},
			// {
			//   vianumun: {
			//     primary: "#84AD4D",
			//     secondary: "#7A5C58",
			//     accent: "#DF504B",
			//     neutral: "#CFCFCF",
			//     "base-100": "#E5E5E5",
			//     info: "#A6CF6F",
			//     success: "#ADD320",
			//     warning: "#FBBD23",
			//     error: "#DF504B",
			//   },
			// },

			'emerald'
		]
	}
};
