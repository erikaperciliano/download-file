import { saveBlobAsFile } from "./downloadBlob";
import { expect, describe, it, vi } from "vitest";

describe("saveBlobAsFile", () => {
  it("cria link e clica para baixar o arquivo", () => {
    const blob = new Blob(["teste"], { type: "text/csv" });
    const clickMock = vi.fn();

    vi.spyOn(document, "createElement").mockImplementation(() => {
      return { click: clickMock } as unknown as HTMLAnchorElement;
    });

    saveBlobAsFile(blob, "usuarios.csv");

    expect(globalThis.URL.createObjectURL).toHaveBeenCalled();
    expect(clickMock).toHaveBeenCalled();
    expect(globalThis.URL.revokeObjectURL).toHaveBeenCalled();
  });
});
