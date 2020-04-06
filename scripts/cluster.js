const cluster = require("cluster");
const limit = 4;

if (cluster.isMaster) {
  for (let i = 0; i < limit; i++) {
    cluster.fork();
  }
} else {
  require('./zombie');
}
