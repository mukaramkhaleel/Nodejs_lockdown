//working with Fs , something that Nodejs can do but not V8 from google cannot do 
const fs = require ('fs');
fs.writeFileSync("test/hello.txt","i just want to see if this can be written into the file"); // export function writeFileSync(path: PathLike | number, data: string | NodeJS.ArrayBufferView, options?: WriteFileOptions): void;