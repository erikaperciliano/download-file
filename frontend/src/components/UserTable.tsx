
import type { User } from "../types/user"

interface UserTableProps {
  users: User[]
}

export const UserTable = ({ users }: UserTableProps) => {
  return (
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
          {users.map((user, index) => (
            <tr key={user.id} className={`hover:bg-gray-50 ${index % 2 === 0 ? "bg-gray-50/50" : "bg-white"}`}>
              <td className="px-4 py-2 border-b">{user.id}</td>
              <td className="px-4 py-2 border-b">{user.name}</td>
              <td className="px-4 py-2 border-b">{user.email}</td>
              <td className="px-4 py-2 border-b">{user.role}</td>
              <td className="px-4 py-2 border-b">{new Date(user.createdAt).toLocaleDateString("pt-BR")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
