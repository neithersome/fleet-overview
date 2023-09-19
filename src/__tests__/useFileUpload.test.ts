import { renderHook, act } from "@testing-library/react-hooks";
import useFileUpload from "../shared/hooks/useFileUpload";

describe("useFileUpload", () => {
  it("should update content when a file is selected", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFileUpload());

    const mockFile = new File(["file content"], "file.txt", {
      type: "text/plain",
    });

    const mockEvent = {
      target: {
        files: [mockFile],
      },
    };

    act(() => {
      result.current.onFileChange(mockEvent as any);
    });

    await waitForNextUpdate();

    expect(result.current.content).toBe("file content");
  });

  it("should not update content when no file is selected", () => {
    const { result } = renderHook(() => useFileUpload());

    const mockEvent = {
      target: {
        files: [],
      },
    };

    act(() => {
      result.current.onFileChange(mockEvent as any);
    });

    expect(result.current.content).toBe(null);
  });
});
