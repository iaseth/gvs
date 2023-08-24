import fs from "fs";
import { doStuff } from "../utils";



export function compileStuff (flags: string[], paths: string[]) {
	if (paths.length === 0) {
		console.log(`Nothing to compile!`);
		return;
	}

	for (const filePath of paths) {
		if (fs.existsSync(filePath)) {
			console.log(`Path found: '${filePath}'`);
			if (filePath.endsWith(".njk")) {
				doStuff(filePath);
			}
		} else {
			console.log(`Path NOT found: '${filePath}'`);
		}
	}
}
