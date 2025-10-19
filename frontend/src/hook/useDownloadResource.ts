// orquestra o download + salva o arquivo
import useDownloadFile from "./useDownloadFile";
import { saveBlobAsFile } from "../utils/downloadBlob";
import { getCurrentDateFormatted } from "../utils/formatDate";

interface UseDownloadResourceOptions {
  key: string;
  downloadFn: () => Promise<Blob>;
  filenamePrefix?: string;
}

interface UseDownloadResourceReturn {
  handleDownload: () => Promise<void>;
  isDownloading: boolean;
  downloadError: Error | undefined;
}

export const useDownloadResource = ({
  key,
  downloadFn,
  filenamePrefix = "arquivo",
}: UseDownloadResourceOptions): UseDownloadResourceReturn => {
  const { downloadFile, isLoading, error } = useDownloadFile<Blob>(key, downloadFn);

  const handleDownload = async () => {
    const blob = await downloadFile();

    if (!blob) throw new Error("Falha ao obter arquivo");

    saveBlobAsFile(blob, getCurrentDateFormatted(filenamePrefix));
  };

  return {
    handleDownload,
    isDownloading: isLoading,
    downloadError: error,
  };
};
