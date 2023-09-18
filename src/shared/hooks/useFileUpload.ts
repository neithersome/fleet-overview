import { ChangeEvent, useState } from "react";

type UseFileUploadReturn = {
  content: string | null;
  onFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const useFileUpload = (): UseFileUploadReturn => {
  const [content, setContent] = useState<string | null>(null);

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const content = e.target?.result as string;
        setContent(content);
      };

      reader.readAsText(selectedFile);
    }
  };

  return { content, onFileChange };
};

export default useFileUpload;
