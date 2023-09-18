import { createBrowserRouter } from "react-router-dom";

import VehicleList from "./VehicleList";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import { getVehicles, getEquipments } from "./VehicleList/api";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/fleet-overview",
    element: <VehicleList />,
    loader: async () => {
      const vehicles = await getVehicles();
      const equipments = await getEquipments();

      return { vehicles, equipments };
    },
    errorElement: <ErrorPage />,
  },
]);
