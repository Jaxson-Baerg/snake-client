const readline = require("readline");

const setupInput = () => {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    resolve(rl);
  });
}

const userInput = (conn) => {
  process.stdin.on("keypress", (str, key) => {
    if(key.ctrl && key.name === "c") {
      console.log("Game quit.");
      conn.destroy();
    }
    if (key.name === "w") {
      conn.write("Move: up");
    } else if (key.name === "a") {
      conn.write("Move: left");
    } else if (key.name === "s") {
      conn.write("Move: down");
    } else if (key.name === "d") {
      conn.write("Move: right");
    }
  });
};

const main = async () => {
  rl = await setupInput();
  return rl;
};

const toExport = module.exports = (conn) => {
  main().then((rl) => {
    userInput(conn);
  });
};