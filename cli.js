#!/usr/bin/env node
const fs = require("fs");
const gvs = require("./dist");



function main (args) {
	if (args.length === 0) {
		console.log("No args supplied!");
	} else if (args.length === 1) {
		const filePath = args[0];
		if (fs.existsSync(filePath)) {
			console.log(`Path found: '${filePath}'`);
			if (filePath.endsWith(".njk")) {
				gvs.doStuff(filePath);
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
