interface BlobDownloader {
  downloadBlob: (blob: Blob, filename: string) => void;
}

export const useBlobDownloader = (): BlobDownloader => {
  const downloadBlob = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  return { downloadBlob };
};
