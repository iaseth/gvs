import json


with open("tailwindColors.json") as f:
	tailwindColorsJson = json.load(f)

tailwindColors = tailwindColorsJson["colors"]
tc = {}
for color in tailwindColors:
	jo = {}
	for shade in color["shades"]:
		shadeName = f"n{shade['shade']}"
		jo[shadeName] = shade["hex"]
	tc[color['name']] = jo

json_output_path = "../src/props/tc.json"
with open(json_output_path, "w") as f:
	json.dump(tc, f)
print(f"Saved: {json_output_path}")


