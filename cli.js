#!/usr/bin/env node
const fs = require("fs");
const nunjucks = require("nunjucks");



function doStuff (filePath) {
	const svgOutputFilePath = filePath.slice(0, -4) + ".svg";
	const njkContents = fs.readFileSync(filePath, "utf8");

	const svgContents = nunjucks.renderString(njkContents);
	fs.writeFileSync(svgOutputFilePath, svgContents);
	console.log(`Saved: '${svgOutputFilePath}'`);
}

function main (args) {
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

const args = process.argv.slice(2);
main(args);
