/*
 useDownloadFile:
  - faz o fetch e gerencia estados
*/

import useSWRMutation from "swr/mutation";
interface UseDownloadFileReturn<T> {
  downloadFile: () => Promise<T | undefined>;
  blob: T | undefined;
  isLoading: boolean;
  error: Error | undefined;
}

const useDownloadFile = <T>(key: string, downloadFn: () =>Promise <T>): UseDownloadFileReturn <T> => {
  const { trigger, isMutating, error, data } = useSWRMutation(
    key,
    async () => {
      const response  = await downloadFn();
      return response; 
    }
  );

  return {
    downloadFile: trigger,
    blob: data,         
    isLoading: isMutating,
    error: error,
  };
};

export default useDownloadFile;
