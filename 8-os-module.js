const os = require("os");
// get user info
const { userInfo } = os;
console.log(userInfo());

// get uptime system
console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
