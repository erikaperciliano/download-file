import DownloadButton from "./DownloaButton"
import useUsers from "../hook/useUser";
import { LoadingState } from "./LoadingState";
import { ErrorState } from "./ErrorState";
import { useUserDownload } from "../hook/useUserDownload";
import { UserTable } from "./UserTable";

const Home = () => {
    const { users, isLoading, error } = useUsers();
    const { handleDownload, isDownloading, downloadError } = useUserDownload()

    if (isLoading) {
        return <LoadingState />
    }

    if (error) {
        return <ErrorState />
    }

   return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50">
      <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md border-b">
        <h1 className="text-2xl font-bold text-slate-800">Lista de Usuários</h1>
        <div className="flex flex-col items-end gap-1">
          <DownloadButton
            onDownload={handleDownload}
            isLoading={isDownloading}
            label="Exportar CSV"
            className="w-auto px-6 py-3"
          />
          {downloadError && (
            <span className="text-xs text-red-600" role="alert">
              Erro ao exportar
            </span>
          )}
        </div>
      </header>

      <main className="flex-1 overflow-auto p-8">
        <UserTable users={users} />
      </main>
    </div>
  )
}

export default Home;