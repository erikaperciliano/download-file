import useSWR from "swr"
import { apiUrl, fetcher } from "../api"

export default function useUsers() {
  const { data, error, isLoading } = useSWR(`${apiUrl}/user`, fetcher)

  return {
    users: data,
    isLoading,
    error,
  }
}
