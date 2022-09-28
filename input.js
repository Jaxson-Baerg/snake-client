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

const sendMessage = (rl) => {
  return new Promise((resolve, reject) => {
    rl.clearLine(process.stderr, 1);
    rl.question("\nEnter public message:\n: ", (answer) => {
      resolve(answer);
    });
  });
};

const userInput = (conn, rl) => {
  process.stdin.on("keypress", async (str, key) => {
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

    if (key.sequence === "/") {
      conn.write(`Say: ${await sendMessage(rl)}`);
    }
  });
};

const main = async () => {
  rl = await setupInput();
  return rl;
};

const toExport = module.exports = (conn) => {
  main().then((rl) => {
    userInput(conn, rl);
  });
};