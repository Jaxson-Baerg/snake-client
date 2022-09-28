const net = require("net");

const connect = module.exports = () => {
  return new Promise((resolve, reject) => {
    const conn = net.createConnection({
      host: "165.227.47.243",
      port: 50541
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