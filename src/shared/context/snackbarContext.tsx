import { Snackbar, SnackbarProps } from "@mui/material";
import { ReactNode, createContext, useContext, useState } from "react";

const SnackBarContext = createContext<{
  set: (value: Partial<SnackbarProps>) => void;
}>({ set: () => {} });

export const SnackBarProvider = ({ children }: { children: ReactNode }) => {
  const [snackbar, setSnackbar] = useState<Partial<SnackbarProps>>({
    open: false,
    message: "",
  });

  const onClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <SnackBarContext.Provider
      value={{
        set: setSnackbar,
      }}
    >
      {children}
      <Snackbar {...snackbar} onClose={onClose} autoHideDuration={3000} />
    </SnackBarContext.Provider>
  );
};

export const useSnackBar = () => {
  const context = useContext(SnackBarContext);

  if (!context) {
    throw new Error("useSnackBar must be used within a SnackBarProvider");
  }

  return context;
};
