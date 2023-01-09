// .index.js

const robots = {
  robotSenderMailer: require("./robots/robotSenderMailer.js"),
  robotTemplater: require("./robots/robotTemplater.js"),
};

async function start() {
  console.log("index.js - begin");

  const t = await robots.robotTemplater();

  await robots.robotSenderMailer(t);

  console.log("index.js - end");

  process.exit(1);
}

start();
