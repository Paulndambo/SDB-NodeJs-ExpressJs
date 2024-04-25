const os = require('os');

//console.log(os.cpus());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.platform());
console.log(os.release());
console.log(os.type());
console.log(os.uptime());
console.log(os.userInfo());

const platform = os.platform();

if (platform === 'linux') {
    console.log('Linux');
} else if (platform === 'darwin') {
    console.log('Mac');
} else if (platform === 'win32' || platform === 'win64') {
    console.log('Windows');
} else {
    console.log('Other');
}