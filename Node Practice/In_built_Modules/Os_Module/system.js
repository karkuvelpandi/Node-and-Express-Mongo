const os=require("os")

console.log(os.arch());        //x64
console.log(os.platform());    //win32
console.log(os.userInfo());    // Object { }
console.log(os.version());     //Windows 10 Home Single Language
console.log((os.freemem())/1024/1024/1024);