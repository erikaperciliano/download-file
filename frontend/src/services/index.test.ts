import { beforeEach, describe, expect, it, vi } from "vitest";
import downloadUsersCSV from "../services";

describe("downloadUsersCSV", () => {
  beforeEach(() => {
    global.fetch = vi.fn() as unknown as typeof fetch;
  });

  it("deve retornar um blob quando o fetch for bem-sucedido", async () => {
    const blob = new Blob(["data"]);

    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      blob: () => Promise.resolve(blob),
    });

    const result = await downloadUsersCSV();
    expect(result).toBe(blob);
  });

  it("deve lançar erro quando o fetch falhar", async () => {
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: false,
    });

    await expect(downloadUsersCSV()).rejects.toThrow("Erro ao gerar CSV");
  });
});
