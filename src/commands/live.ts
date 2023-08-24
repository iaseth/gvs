import fs from "fs";
import { doStuff } from "../utils";



export function liveCommand (flags: string[], paths: string[]) {
	if (paths.length === 0) {
		console.log(`No path was provided!`);
		return;
	} else if (paths.length > 1) {
		console.log(`Too many paths were provided!`);
		return;
	}

	const filePath = paths[0];
	if (fs.existsSync(filePath)) {
		console.log(`Path found: '${filePath}'`);
		if (filePath.endsWith(".njk")) {
			doStuff(filePath);
		}
	} else {
		console.log(`Path NOT found: '${filePath}'`);
	}
}
