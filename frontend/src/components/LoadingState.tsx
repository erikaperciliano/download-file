import { Loader2 } from "lucide-react"

export const LoadingState = () => {
  return (
    <div className="flex items-center justify-center h-screen text-slate-700 text-lg">
      <Loader2 className="animate-spin mr-2" aria-hidden="true" />
      <span>Carregando...</span>
    </div>
  )
}
