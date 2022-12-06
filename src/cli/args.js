const parseArgs = () => {
    const arg = process.argv.slice(2)
	const res = [];
	for (let i = 0; i < arg.length; i += 2) {
		res.push(`${arg[i].slice(2)} is ${arg[i + 1]}`);
	}
	console.log(res.join(', '));
};

parseArgs();