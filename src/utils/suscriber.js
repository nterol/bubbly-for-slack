import openSocket from "socket.io-client";

const socket = openSocket("http://localhost:9000");

function suscriber(cb) {
  socket.on("timer", timestamp => cb(null, timestamp));
  socket.emit("suscriber", 1000);
}

export { suscriber };
