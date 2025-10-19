import useDownloadFile from "../hook/useDownloadFile"
import DownloadButton from "./DownloaButton"
import useUsers from "../hook/useUser";
import { getCurrentDateFormatted } from "../utils/formatDate";
import { AlertCircle, Loader2 } from "lucide-react";
import { useBlobDownloader } from "../hook/useBlobDownloader";

const Home = () => {
    const { users, isLoading, error } = useUsers();

    const { downloadFile } =  useDownloadFile();
    const  { downloadBlob } = useBlobDownloader();


    
const handleDownload = async () => {
  try {
    const blob = await downloadFile();
    if (!blob) return;
    downloadBlob(blob, getCurrentDateFormatted('usuarios'));
  } catch (err) {
    console.error("Erro ao baixar o arquivo:", err);
  }
};

    if (isLoading) {
    return (
        <div className="flex items-center justify-center h-screen text-slate-700 text-lg">
        <Loader2 className="animate-spin mr-2" /> Carregando...
        </div>
    )
    }

    if (error) {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-red-600 text-lg">
        <AlertCircle className="mb-2" /> Erro ao carregar dados.
        </div>
    )
    }

    return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50">
        <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md border-b">
        <h1 className="text-2xl font-bold text-slate-800">Lista de Usuários</h1>
        <DownloadButton
            onDownload={handleDownload}
            isLoading={isLoading}
            label="Exportar CSV"
            className="w-auto px-6 py-3"
        />
        </header>

        <main className="flex-1 overflow-auto p-8">
        <div className="w-full h-full bg-white rounded-lg shadow-sm border overflow-auto">
            <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                <tr>
                <th className="px-4 py-3 border-b">ID</th>
                <th className="px-4 py-3 border-b">Nome</th>
                <th className="px-4 py-3 border-b">E-mail</th>
                <th className="px-4 py-3 border-b">Função</th>
                <th className="px-4 py-3 border-b">Criado em</th>
                </tr>
            </thead>
                <tbody>
                {users.map((user: any, index: number) => (
                <tr
                    key={user.id}
                    className={`hover:bg-gray-50 ${index % 2 === 0 ? "bg-gray-50/50" : "bg-white"}`}
                >
                    <td className="px-4 py-2 border-b">{user.id}</td>
                    <td className="px-4 py-2 border-b">{user.name}</td>
                    <td className="px-4 py-2 border-b">{user.email}</td>
                    <td className="px-4 py-2 border-b">{user.role}</td>
                    <td className="px-4 py-2 border-b">
                    {new Date(user.createdAt).toLocaleDateString("pt-BR")}
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </main>
    </div>
    )
}

export default Home;