const connect = require("./client");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const main = async () => {
  console.log("Connecting...");
  const conn = await connect();
  return conn;
};

main().then((conn) => {
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
});