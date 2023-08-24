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
			commands.compileCommand(flags, paths); break;
		case "l":
		case "live":
			commands.liveCommand(flags, paths); break;
		default:
			console.log(`Unknown command: '${command}'`);
	}
}
