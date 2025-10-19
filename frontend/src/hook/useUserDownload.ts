// especializa o hook genérico
import { useDownloadResource } from "./useDownloadResource";
import downloadUsersCSV from "../services";

export const useUserDownload = () =>
  useDownloadResource({
    key: "downloadUserCSV",
    downloadFn: downloadUsersCSV,
    filenamePrefix: "usuarios",
  });
