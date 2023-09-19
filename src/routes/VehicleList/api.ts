import fleetServer from "../../shared/api/fleetServer";

export const getVehicles = () =>
  fleetServer.get("/vehicles").then((res) => res.data);

export const getEquipments = () =>
  fleetServer.get(`/equipments`).then((res) => res.data);
