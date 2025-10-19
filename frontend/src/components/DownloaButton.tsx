import { Button } from "@radix-ui/themes/components/button"
import { Download, Loader2 } from "lucide-react"
import { cn } from "../lib"

interface DownloadButtonProps {
  onDownload: () => void | Promise<void>
  isLoading?: boolean
  label?: string
  className?: string
  disabled?: boolean
  variant?: "default" | "outline"
}

const DownloadButton = ({
  onDownload,
  isLoading = false,
  label = "Export to CSV",
  className = "",
  disabled = false,
  variant = "default"
}: DownloadButtonProps) =>  {
  const baseStyles =
    "cursor-pointer font-semibold text-sm py-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"

  const variantStyles = {
    default: "bg-black hover:bg-neutral-900 text-white",
    outline: "border-2 border-black hover:bg-black hover:text-white text-black",
  }

  return (
    <Button
      onClick={onDownload}
      disabled={isLoading || disabled}
      className={cn(baseStyles, variantStyles[variant], className)}
      aria-label={isLoading ? "Baixando arquivo" : label}
      aria-busy={isLoading}
    >
      {isLoading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          Baixando...
        </>
      ) : (
        <>
          <Download className="h-4 w-4" aria-hidden="true"/>
          {label}
        </>
      )}
    </Button>
  )
}

export  default DownloadButton;