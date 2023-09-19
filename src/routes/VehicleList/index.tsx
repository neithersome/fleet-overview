import { Box, Divider, List, SxProps, Typography } from "@mui/material";
import FileUploadButton from "../../shared/components/FileUploadButton";
import Vehicle from "./Vehicle";
import useVehicleList from "./useVehicleList";

export type EquipmentType = {
  id: number;
  name: string;
};

const VehicleList = () => {
  const vehicleList = useVehicleList();

  return (
    <List sx={listSx}>
      <Box display="flex" justifyContent="space-between" padding={2}>
        <Typography variant="h6">Vehicles</Typography>
        <Box display="flex" gap={2}>
          <FileUploadButton
            label="Vehicles"
            onFileChange={vehicleList.onVehicleImport}
            size="small"
          />
          <FileUploadButton
            label="Equipment"
            onFileChange={vehicleList.onEquipmentImport}
            size="small"
          />
        </Box>
      </Box>
      <Divider sx={{ width: "100%", mb: 2 }} />
      {vehicleList.isLoading
        ? "Loading vehicles..."
        : vehicleList.list.map((vehicle) => (
            <Vehicle
              key={vehicle.id}
              vehicle={vehicle}
              equipment={vehicleList.equipments}
            />
          ))}
    </List>
  );
};

export default VehicleList;

const listSx: SxProps = {
  width: "100%",
  maxWidth: 500,
  bgcolor: "background.paper",
};
