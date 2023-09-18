import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { ChangeEvent } from "react";

interface FileUploadButtonProps extends ButtonProps {
  label: string;
  onFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FileUploadButton = ({
  label,
  onFileChange,
  ...buttonProps
}: FileUploadButtonProps) => {
  return (
    <Button
      component="label"
      variant="contained"
      startIcon={<CloudUploadIcon />}
      {...buttonProps}
    >
      {label || "Upload File"}
      <VisuallyHiddenInput type="file" onChange={onFileChange} />
    </Button>
  );
};

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default FileUploadButton;
