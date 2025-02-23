const fs = require("node:fs");

// fs.unlink(path, callback) -> this is the async version
fs.unlink(__dirname + "/text-files/text.txt", (err) => {
  if (err) throw err;
  console.log("successfully deleted /tmp/hello");
});

// fs.unlinkSync(path) -> this is the sync version
try {
  fs.unlinkSync(__dirname + "/text-files/text.txt");
  console.log("successfully deleted /tmp/hello");
} catch (err) {
  console.error("there was an error:", err.message);
}

// fs.access(path, mode, callback) -> this is the async version
fs.access(__dirname + "/text-files/text.txt", fs.constants.F_OK, (err) => {
  console.log(
    `${__dirname}/text-files/text.txt ${err ? "does not exist" : "exists"}`
  );
});

// fs.appendFile(file, data[, options], callback) -> this is the async version
fs.appendFile(
  __dirname + "/text-files/message.txt",
  "how are you",
  "utf8",
  (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  }
);
//fs.open(path, flags[, mode], callback) -> this is the async version
fs.open(__dirname + "/text-files/test.txt", "a", (err, fd) => {
  if (err) throw err;
  fs.appendFile(fd, "data to append", "utf8", (err) => {
    //fs.close(fd, callback) -> this is the async version
    fs.close(fd, (err) => {
      if (err) throw err;
    });
    if (err) throw err;
  });
});

//fs.chmod(path, mode, callback) -> this is the async version
// 4: Read permission (r)
// 2: Write permission (w)
// 1: Execute permission (x)
// Add these values to combine permissions (e.g., 7 = 4 + 2 + 1 = read, write, execute).
chmod(__dirname + "/text-files/test.txt", 0o775, (err) => {
  if (err) throw err;
  console.log('The permissions for file "my_file.txt" have been changed!');
});

//fs.copyFile(src, dest[, flags], callback) -> this is the async version
// fs.constants.COPYFILE_EXCL: The copy operation will fail if dest already exists.
// fs.constants.COPYFILE_FICLONE: The copy operation will attempt to create a copy-on-write reflink. If the platform does not support copy-on-write, then a fallback copy mechanism is used.
// fs.constants.COPYFILE_FICLONE_FORCE: The copy operation will attempt to create a copy-on-write reflink. If the platform does not support copy-on-write, then the operation will fail.
fs.copyFile(
  __dirname + "/text-files/test.txt",
  __dirname + "/text-files/test-copy.txt",
  (err) => {
    if (err) throw err;
    console.log("source.txt was copied to destination.txt");
  }
);

//fs.cp(src, dest[, options], callback) -> this is the async version
//recursive: true: The copy operation will copy the directory and all of its contents.
//filter: <Function>: A function that determines whether or not to copy the file.
fs.cp(
  __dirname + "/text-files",
  __dirname + "new-text-files",
  {
    recursive: true,
  },
  (err) => {
    if (err) {
      return console.error("Error copying files:", err.message);
    }
    console.log("All .txt files were copied successfully!");
  }
);

//fs.createReadStream(`path[, options]`) -> this is the async version
fs.createReadStream(__dirname + "/text-files/test.txt", "utf-8");

//fs.createWriteStream(`path[, options]`) -> this is the async version
fs.createWriteStream(__dirname + "/text-files/test.txt", "utf-8");
