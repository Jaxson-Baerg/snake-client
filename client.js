const net = require("net");

const connect = module.exports = () => {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log("Server message:", data);
  });
  return conn;
}