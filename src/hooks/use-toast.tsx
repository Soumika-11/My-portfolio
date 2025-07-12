import * as React from "react"
import { cn } from "@/lib/utils"

interface ToastContextType {
  toast: (props: { title: string; description?: string }) => void
}

const ToastContext = React.createContext<ToastContextType | null>(null)

export function useToast() {
  const context = React.useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}

interface Toast {
  id: string
  title: string
  description?: string
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([])

  const toast = React.useCallback((props: { title: string; description?: string }) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast: Toast = { id, ...props }
    
    setToasts((prev) => [...prev, newToast])
    
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 5000)
  }, [])

  const removeToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={cn(
              "bg-background border border-border rounded-lg p-4 shadow-lg max-w-sm animate-fade-in",
              "cursor-pointer hover:bg-accent/50 transition-colors"
            )}
            onClick={() => removeToast(toast.id)}
          >
            <div className="font-semibold">{toast.title}</div>
            {toast.description && (
              <div className="text-sm text-muted-foreground mt-1">
                {toast.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}
