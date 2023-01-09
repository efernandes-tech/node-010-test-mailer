// .index.js

const robots = {
  robotSenderMailer: require("./robots/robotSenderMailer.js"),
};

async function start() {
  console.log("index.js - begin");

  await robots.robotSenderMailer();

  console.log("index.js - end");

  process.exit(1);
}

start();
