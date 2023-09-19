import { useState, useEffect } from "react";
import useFileUpload from "../../shared/hooks/useFileUpload";
import { VehicleType } from "./Vehicle";
import { getVehicles } from "./api";
import { EquipmentType } from ".";
import { useSnackBar } from "../../shared/context/snackbarContext";

const useVehicleList = () => {
  const [list, setList] = useState<VehicleType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const vehicleFile = useFileUpload();

  const [equipments, setEquipments] = useState<EquipmentType[]>([]);
  const equipmentFile = useFileUpload();

  const snackbar = useSnackBar();

  useEffect(() => {
    if (vehicleFile.content) {
      try {
        const vehicles = JSON.parse(vehicleFile.content);

        // TODO: Check if the file is a valid vehicle JSON file
        // TODO: Check for double entries
        setList([...list, ...vehicles]);

        snackbar.set({
          open: true,
          message: "Vehicles imported successfully",
        });
      } catch (error) {
        snackbar.set({
          open: true,
          message: "Error while importing vehicles",
        });
        console.error(error);
      }
    }
  }, [vehicleFile.content]);

  useEffect(() => {
    if (equipmentFile.content) {
      try {
        const equipment = JSON.parse(equipmentFile.content);

        //TODO: Check if the file is a valid equipment JSON file
        setEquipments([...equipment]);

        snackbar.set({
          open: true,
          message: "Equipment imported successfully",
        });
      } catch (error) {
        snackbar.set({
          open: true,
          message: "Error while importing equipment",
        });
        console.error(error);
      }
    }
  }, [equipmentFile.content]);

  useEffect(() => {
    setIsLoading(true);

    getVehicles()
      .then((vehicles) => {
        setList(vehicles);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
      });
  }, []);

  return {
    list,
    isLoading,
    onVehicleImport: vehicleFile.onFileChange,
    onEquipmentImport: equipmentFile.onFileChange,
    equipments,
  };
};

export default useVehicleList;
