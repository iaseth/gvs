import fs from "fs";

import { doStuff } from './utils';



export function main (args: string[]) {
	if (args.length === 0) {
		console.log("No args supplied!");
	} else if (args.length === 1) {
		const filePath = args[0];
		if (fs.existsSync(filePath)) {
			console.log(`Path found: '${filePath}'`);
			if (filePath.endsWith(".njk")) {
				doStuff(filePath);
			}
		} else {
			console.log(`Path NOT found: '${filePath}'`);
		}
	} else {
		console.log("Too many args supplied!");
	}
}
