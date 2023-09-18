import { Box, Typography } from "@mui/material";
import React from "react";

const Label = ({
  title,
  children,
}: {
  title: string | number;
  children: string | React.ReactNode;
}) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Typography variant="body2" component="span">
        <b>{title}:</b> {children}
      </Typography>
    </Box>
  );
};

export default Label;
