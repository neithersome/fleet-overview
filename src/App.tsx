import { Container } from "@mui/material";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import "./App.css";
import { SnackBarProvider } from "./shared/context/snackbarContext";

function App() {
  return (
    <Container maxWidth="xl">
      <SnackBarProvider>
        <RouterProvider router={router} />
      </SnackBarProvider>
    </Container>
  );
}

export default App;
