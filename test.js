const userNameGenerator = require('./src/index.js');

const username = userNameGenerator.createUserName(5000);

console.log(username);
