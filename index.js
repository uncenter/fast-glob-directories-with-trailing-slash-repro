import glob from "fast-glob";

console.log(
	"Without trailing slash:",
	await glob("**/*.txt", {
		ignore: ["foo"],
	})
);

console.log(
	"With trailing slash:",
	await glob("**/*.txt", {
		ignore: ["foo/"],
	})
);
