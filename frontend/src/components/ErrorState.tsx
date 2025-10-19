import { AlertCircle } from "lucide-react"

interface ErrorStateProps {
  message?: string
}

export const ErrorState = ({ message = "Erro ao carregar dados." }: ErrorStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-red-600 text-lg">
      <AlertCircle className="mb-2" aria-hidden="true" />
      <span role="alert">{message}</span>
    </div>
  )
}
