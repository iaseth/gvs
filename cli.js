#!/usr/bin/env node
const gvs = require("./dist");



const args = process.argv.slice(2);
gvs.main(args);
