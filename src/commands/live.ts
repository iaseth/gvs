import fs from "fs";
import http from "http";

import { templates } from "../templates";
import { renderNunjucksToSvg } from "../utils";



const PORT = 5500;

function runSingleFileServer (filePath: string) {
	const server = http.createServer((req, res) => {
		const njkContents = fs.readFileSync(filePath, "utf8");
		const svgContents = renderNunjucksToSvg(njkContents);
		const html = templates.singleSvgPreview.render({svgContents});

		res.write(html);
		res.end();
	});
	server.listen(PORT, () => {
		const error = false;
		if (error) {
			console.log(`Something bad happened: '${error}'`);
		} else {
			console.log(`Server is listening running at http://localhost:${PORT} ...`);
		}
	});
}

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
			runSingleFileServer(filePath);
		}
	} else {
		console.log(`Path NOT found: '${filePath}'`);
	}
}
