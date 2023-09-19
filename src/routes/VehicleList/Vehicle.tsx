import { Box, Collapse, ListItemButton, ListItemText } from "@mui/material";
import { useMemo, useState } from "react";
import Label from "../../shared/api/components/Label";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { EquipmentType } from ".";

export type VehicleType = {
  id: string;
  name: string;
  driver: string;
  status: string;
  fuelType: string;
  equipments: number[];
};

const Vehicle = ({
  vehicle,
  equipment,
}: {
  vehicle: VehicleType;
  equipment: EquipmentType[];
}) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prevState: boolean) => !prevState);
  };

  const getEquipmentNames = () => {
    if (!vehicle.equipments?.length || !equipment.length) return;

    return vehicle.equipments
      .map((equipmentNumber) => {
        return equipment.find((equipment) => equipment.id === equipmentNumber)
          ?.name;
      })
      .join(", ");
  };

  const equipmentNames = useMemo(getEquipmentNames, [
    equipment,
    vehicle.equipments,
  ]);

  return (
    <>
      <ListItemButton onClick={toggleOpen}>
        <ListItemText primary={vehicle.name || "No Name"} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open}>
        <Box padding={2}>
          <Label title="Name">{vehicle.id}</Label>
          <Label title="Driver">{vehicle.driver}</Label>
          <Label title="Status">{vehicle.status}</Label>
          <Label title="Fuel Type">{vehicle.fuelType}</Label>
          {equipmentNames && <Label title="Equipments">{equipmentNames}</Label>}
        </Box>
      </Collapse>
    </>
  );
};

export default Vehicle;
