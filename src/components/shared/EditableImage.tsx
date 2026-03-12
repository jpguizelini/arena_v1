// src/components/shared/EditableImage.tsx
'use client'

import Image, { ImageProps } from 'next/image'
import { useState } from 'react'
import { useIsAdmin } from '@/contexts/AdminContext'
import { Upload, Check, X, Loader2 } from 'lucide-react'

interface EditableImageProps extends ImageProps {
  slotId: string  // única prop a mais
}

export default function EditableImage({ slotId, src, ...props }: EditableImageProps) {
  const isAdmin = useIsAdmin()
  const [currentSrc, setCurrentSrc] = useState(src)
  const [pending, setPending] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)

  function handleFileSelect(file: File) {
    setPending(file)
    setPreview(URL.createObjectURL(file))
  }

  async function handleSave() {
    if (!pending) return
    setUploading(true)
    try {
      const formData = new FormData()
      formData.append('file', pending)
      formData.append('fileName', `${slotId}.jpg`)

      const res = await fetch('/api/upload', { method: 'POST', body: formData })
      const data = await res.json()

      if (data.url) {
        setCurrentSrc(`${data.url}?t=${Date.now()}`)
        handleCancel()
      }
    } finally {
      setUploading(false)
    }
  }

  function handleCancel() {
    if (preview) URL.revokeObjectURL(preview)
    setPending(null)
    setPreview(null)
  }

  // Visitante normal — renderiza igual ao <Image> original
  if (!isAdmin) {
    return <Image src={currentSrc} {...props} />
  }

  // Admin — renderiza com overlay
  return (
    <div className="relative group" style={{ display: 'contents' }}>
      <Image src={preview ?? currentSrc} {...props} />

      {/* Overlay de confirmação quando há arquivo pendente */}
      {pending ? (
        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-3 z-10">
          <p className="text-white text-xs">{pending.name}</p>
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              disabled={uploading}
              className="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1.5 rounded-lg"
            >
              {uploading ? <><Loader2 size={13} className="animate-spin" /> Salvando...</> : <><Check size={13} /> Salvar</>}
            </button>
            <button
              onClick={handleCancel}
              disabled={uploading}
              className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1.5 rounded-lg"
            >
              <X size={13} /> Cancelar
            </button>
          </div>
        </div>
      ) : (
        /* Botão trocar foto — aparece no hover */
        <label className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer z-10">
          <div className="flex items-center justify-center gap-1.5 bg-white/90 hover:bg-white text-black text-xs font-medium py-1.5 px-3 rounded-lg shadow">
            <Upload size={13} /> Trocar foto
          </div>
          <input
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) handleFileSelect(file)
              e.target.value = ''
            }}
          />
        </label>
      )}
    </div>
  )
}