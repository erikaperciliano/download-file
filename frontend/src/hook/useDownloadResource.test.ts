import { renderHook, act } from "@testing-library/react";
import { useDownloadResource } from "../hook/useDownloadResource";
import { saveBlobAsFile } from "../utils/downloadBlob";
import { describe, expect, it, vi } from "vitest";

vi.mock("../utils/downloadBlob", () => ({
  saveBlobAsFile: vi.fn(),
}));

describe("useDownloadResource", () => {
  it("deve chamar o downloadFn e salvar o arquivo", async () => {
    const mockBlob = new Blob(["csv"], { type: "text/csv" });
    const mockDownloadFn = vi.fn().mockResolvedValue(mockBlob);

    const { result } = renderHook(() =>
      useDownloadResource({
        key: "mock",
        downloadFn: mockDownloadFn,
        filenamePrefix: "usuarios",
      })
    );

    await act(async () => {
      await result.current.handleDownload();
    });

    expect(mockDownloadFn).toHaveBeenCalled();
    expect(saveBlobAsFile).toHaveBeenCalledWith(
      mockBlob,
      expect.stringMatching(/^usuarios_\d{4}_\d{2}_\d{2}\.csv$/)
    );
  });

  it("deve lançar erro se o blob for undefined", async () => {
    const mockDownloadFn = vi.fn().mockResolvedValue(undefined);

    const { result } = renderHook(() =>
      useDownloadResource({
        key: "mock",
        downloadFn: mockDownloadFn,
      })
    );

    await expect(result.current.handleDownload()).rejects.toThrow("Falha ao obter arquivo");
  });
});
