const fs = require("fs");

const readChunk = fs.createReadStream(__dirname + "/story.txt",{
  encoding: "utf8",
});

readChunk.on("data",(chunk) => {
  console.log("New chunk received:");
    console.log(chunk);
}
);