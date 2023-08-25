import tcJson from './tc.json';



interface TailwindColor {
	n50: string,
	n100: string,
	n200: string,
	n300: string,
	n400: string,
	n500: string,
	n600: string,
	n700: string,
	n800: string,
	n900: string
}

interface TailwindColors {
	amber: TailwindColor,
	blue: TailwindColor,
	cyan: TailwindColor,
	emerald: TailwindColor,
	fuchsia: TailwindColor,
	gray: TailwindColor,
	green: TailwindColor,
	indigo: TailwindColor,
	lime: TailwindColor,
	neutral: TailwindColor,
	orange: TailwindColor,
	pink: TailwindColor,
	purple: TailwindColor,
	red: TailwindColor,
	rose: TailwindColor,
	sky: TailwindColor,
	slate: TailwindColor,
	stone: TailwindColor,
	teal: TailwindColor,
	violet: TailwindColor,
	yellow: TailwindColor,
	zinc: TailwindColor,
}

const tailwind: TailwindColors = tcJson;
export const props = {
	tailwind,
	tc: tailwind, // shortcut
};
