const net = require("net");
const { IP, PORT } = require("./constants");

const connect = module.exports = () => {
  return new Promise((resolve, reject) => {
    const conn = net.createConnection({
      host: IP,
      port: PORT
    });

    conn.setEncoding("utf8");
    conn.on("connect", () => {
      console.log("Connection Successful.");
      conn.write("Name: FOO");
    });

    conn.on("data", (data) => {
      console.log("Server message:", data);
    });
    resolve(conn);
  });
}