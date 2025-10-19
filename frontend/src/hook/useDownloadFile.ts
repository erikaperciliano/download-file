import useSWRMutation from "swr/mutation";
import downloadUsersCSV from "../services";

const useDownloadFile = () => {
  const { trigger, isMutating, error, data } = useSWRMutation(
    "downloadUserCSV",
    async () => {
      const response  = await downloadUsersCSV();
      return response ; 
    }
  );

  return {
    downloadFile: trigger,
    blob: data,         
    isLoading: isMutating,
    downloadError: error,
  };
};

export default useDownloadFile;
