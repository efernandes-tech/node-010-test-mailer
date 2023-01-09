// ./robots/robotTemplater.js

const fs = require("fs");

async function robot() {
  console.log("robotTemplater() - begin");

  let data;

  try {
    data = fs.readFileSync("./templates/mail-1.html", "utf8");
  } catch (err) {
    console.error(err);
  }

  console.log("robotTemplater() - end");

  return data;
}

module.exports = robot;
