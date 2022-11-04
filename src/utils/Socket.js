import { io } from "socket.io-client";

export const socket = io(process.env.REACT_APP_BASE_API, {
  transports: ["websocket"],
  autoConnect: false,
});

export default socket;
