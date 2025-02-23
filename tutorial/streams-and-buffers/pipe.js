const fs = require("fs");

const readChunk = fs.createReadStream(__dirname + "/story.txt", "utf8");
const writeChunk = fs.createWriteStream(__dirname + "/story-2.txt");

readChunk.pipe(writeChunk);
