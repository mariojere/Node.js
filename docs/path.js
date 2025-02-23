const path = require("node:path");

// path.basename(path[, suffix]) -> this method returns the last portion of a path, similar to the Unix basename command. Trailing directory separators are ignored, see the examples below:
path.basename("/foo/bar/baz/asdf/quux.html");
path.posix.basename("/foo/bar/baz/asdf/quux.html");
path.win32.basename("C:\\foo\\bar\\baz\\asdf\\quux.html");

// path.delimiter -> this property returns the platform-specific path delimiter, which is ; on Windows and : on POSIX.
path.delimiter;

//path.dirname(path) -> this method returns the directory name of a path, similar to the Unix dirname command. Trailing directory separators are ignored, see the examples below:
path.dirname("/foo/bar/baz/asdf/quux.html");

// path.extname(path) -> this method returns the extension of the path, from the last occurrence of the . (period) character to end of string in the last portion of the path. If there is no . in the last portion of the path, or if there are no . characters in the path, it returns an empty string. Examples:
path.extname("index.html");

// path.format(pathObject) -> this method returns a path string from an object. This is the opposite of path.parse(). Examples:
// If `dir`, `root` and `base` are provided,
// `${dir}${path.sep}${base}`
// will be returned. `root` is ignored.
path.format({
  root: "/ignored",
  dir: "/home/user/dir",
  base: "file.txt",
});
// Returns: '/home/user/dir/file.txt'

// `root` will be used if `dir` is not specified.
// If only `root` is provided or `dir` is equal to `root` then the
// platform separator will not be included. `ext` will be ignored.
path.format({
  root: "/",
  base: "file.txt",
  ext: "ignored",
});
// Returns: '/file.txt'

// `name` + `ext` will be used if `base` is not specified.
path.format({
  root: "/",
  name: "file",
  ext: ".txt",
});
// Returns: '/file.txt'

// The dot will be added if it is not specified in `ext`.
path.format({
  root: "/",
  name: "file",
  ext: "txt",
});
// Returns: '/file.txt'

//path.matchGlob(pattern, path) -> this method returns true if the given path matches the specified glob pattern. Examples:
path.matchesGlob("foo.js", "*.js");

//path.isAbsolute(path) -> this method determines if path is an absolute path. An absolute path will always resolve to the same location, regardless of the working directory. Examples:
path.isAbsolute("/foo/bar");

//path.join([...paths]) -> this method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path. Zero-length path segments are ignored. Examples:
path.join("/foo", "bar", "baz/asdf", "quux", "..");

//path.normalize(path) -> this method normalizes the given path, resolving '..' and '.' segments. When multiple, sequential path segment separation characters are found (e.g. / on POSIX and either \ or / on Windows), they are replaced by a single instance of the platform-specific path segment separator (/ on POSIX and \ on Windows). Trailing separators are preserved. If the path is a zero-length string, '.' is returned, representing the current working directory. Examples:
path.normalize("/foo/bar//baz/asdf/quux/..");

//path.parse(path) -> this method returns an object whose properties represent significant elements of the path. Trailing directory separators are ignored, see the examples below:
path.parse("/home/user/dir/file.txt");

//path.posix -> this property provides access to POSIX specific implementations of the path methods.
path.posix;

//path.relative(from, to) -> this method returns a path string that is relative to the `from` path. The `to` path is resolved to an absolute path before the calculation is done. If `from` and `to` are the same, an empty string is returned. Examples:
path.relative("/data/orandea/test/aaa", "/data/orandea/impl/bbb");

//path.resolve([...paths]) -> this method resolves a sequence of paths or path segments into an absolute path. The resulting path is normalized, and trailing slashes are removed unless the path is resolved to the root directory. Zero-length path segments are ignored. If no arguments are passed, the method returns the current working directory. Examples:
path.resolve("/foo/bar", "./baz");

//path.sep
path.resolve(__dirname,"text-file","text.txt").split(path.sep)

//path.win32
path.win32