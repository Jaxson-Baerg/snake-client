const connect = require("./client");
const input = require("./input");

const main = async () => {
  console.log("Connecting...");
  const conn = await connect();
  return conn;
};

main().then((conn) => {
  input(conn);
});