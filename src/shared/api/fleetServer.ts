import axios from "axios";

const fleetServer = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
});

export default fleetServer;
