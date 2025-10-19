import { Button } from "@radix-ui/themes/components/button"
import { Download, Loader2 } from "lucide-react"

interface DownloadButtonProps {
  onDownload: () => void | Promise<void>
  isLoading?: boolean
  label?: string
  className?: string
  disabled?: boolean
}

const DownloadButton = ({
  onDownload,
  isLoading = false,
  label = "Export to CSV",
  className = "",
  disabled = false,
}: DownloadButtonProps) =>  {
  return (
    <Button
      onClick={onDownload}
      disabled={isLoading || disabled}
      className={`cursor-pointer  bg-black hover:bg-neutral-900 text-white font-semibold text-sm py-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-50 ${className}`}
    >
      {isLoading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Downloading...
        </>
      ) : (
        <>
          <Download className="h-4 w-4" />
          {label}
        </>
      )}
    </Button>
  )
}

export  default DownloadButton;