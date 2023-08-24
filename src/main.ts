import { commands } from "./commands";



export function main (args: string[]) {
	const [command=false, ...rest] = args;
	const flags = rest.filter(arg => arg.startsWith("-"));
	const paths = rest.filter(arg => !arg.startsWith("-"));

	if (!command) {
		console.log("No command was specified!");
		return;
	}

	switch (command) {
		case "c":
		case "compile":
			commands.compileStuff(flags, paths); break;
		default:
			console.log(`Unknown command: '${command}'`);
	}
}
