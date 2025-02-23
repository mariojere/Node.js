const fs = require("fs");

const read = () => {
  try {
    const data = fs.readFileSync("file-1.txt", "utf8");
    console.log(data);
    return data;
  } catch (err) {
    console.error("Error reading file:", err);
  }

};

const data = read(); // Read from the file


const write = () => {
  try {
    fs.writeFileSync("file-1.txt", `${data} I hate it here`, "utf-8");
    console.log("File written");
  } catch (err) {
    console.error("Error writing file:", err);
  }
};

write(); // Write to the file
read();  // Read from the file