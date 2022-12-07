import { readFile } from 'fs';
import { createHash } from 'crypto';

const calculateHash = async () => {
    readFile('files/fileToCalculateHashFor.txt', (_, data) => {
		const res = createHash('sha256').digest('hex');
		console.log(res);
	})
};

await calculateHash();