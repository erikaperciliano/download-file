import { render, screen, fireEvent } from "@testing-library/react";
import DownloadButton from "./DownloaButton";
import { describe, expect, it, vi } from "vitest";

describe("DownloadButton", () => {
  it("chama onDownload ao clicar", () => {
    const onDownload = vi.fn();
    render(<DownloadButton onDownload={onDownload} label="Baixar CSV" />);
    fireEvent.click(screen.getByRole("button", { name: /Baixar CSV/i }));
    expect(onDownload).toHaveBeenCalled();
  });

  it("mostra spinner quando isLoading=true", () => {
    render(<DownloadButton onDownload={() => {}} isLoading />);
    expect(screen.getByText(/Baixando/i)).toBeInTheDocument();
  });
});
