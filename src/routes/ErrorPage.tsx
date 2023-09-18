import { Box } from "@mui/material";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError() as Error;

  return (
    <Box sx={{ display: "flex", justifyContent: "center", flex: 1 }}>
      <Box
        sx={{
          border: "1px solid white",
          p: 5,
          borderRadius: 10,
        }}
      >
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        {error?.message && <p>{error.message}</p>}
      </Box>
    </Box>
  );
};

export default ErrorPage;
