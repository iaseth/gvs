import fs from "fs";
import nunjucks from "nunjucks";
import { props } from "./props";



export function renderNunjucksToSvg (njkContents: string) {
	const svgRawText = nunjucks.renderString(njkContents, props);
	const svgRawLines = svgRawText.split("\n");
	const svgTrimmedLines = svgRawLines.map(line => line.trimEnd()); // trim trailing whitespace
	const svgNotEmptyLines = svgTrimmedLines.filter(line => line); // remove empty lines
	const svgContents = svgNotEmptyLines.join("\n");
	return svgContents;
}

export function doStuff (filePath: string) {
	const svgOutputFilePath = filePath.slice(0, -4) + ".svg";
	const njkContents = fs.readFileSync(filePath, "utf8");
	const svgContents = renderNunjucksToSvg(njkContents);
	fs.writeFileSync(svgOutputFilePath, svgContents);
	console.log(`Saved SVG: '${svgOutputFilePath}'`);
}
