'use client'

import { useMemo, useState } from 'react'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const BUCKET = 'arena-fotos'

function getSupabaseUrl(fileName: string) {
  return `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${fileName}.jpg`
}

const FOTOS = [
  { id: 'foto-formato-midia-1', title: 'OUTDOOR' },
  { id: 'foto-formato-midia-2', title: 'FRONT LIGHT' },
  { id: 'foto-formato-midia-3', title: 'RODOVIA' },
  { id: 'foto-formato-midia-4', title: 'MOBILIÁRIO URBANO' },
  { id: 'foto-formato-midia-5', title: 'PAINEL DIGITAL' },
  { id: 'foto-formato-midia-6', title: 'MEGA PAINEL' },
  { id: 'foto-formato-midia-7', title: 'MEGA LIGHT' },
  { id: 'foto-formato-midia-8', title: 'BANCA 3D' },
]

export default function MidiaFormatsAdmin() {
  const [uploading, setUploading] = useState<string | null>(null)
  const [imageOverrides, setImageOverrides] = useState<Record<string, string>>({})
  const [pendingUploads, setPendingUploads] = useState<Record<string, File>>({})

  const formatos = useMemo(() => {
    const timestamp = Date.now()
    return FOTOS.map((foto) => {
      return {
        id: foto.id,
        title: foto.title,
        img: imageOverrides[foto.id] ?? getSupabaseUrl(foto.id) + `?t=${timestamp}`,
      }
    })
  }, [imageOverrides])

  function handleFileSelect(fotoId: string, file: File) {
    setPendingUploads(prev => ({
      ...prev,
      [fotoId]: file
    }))
  }

  async function handleUpload(fotoId: string, file: File) {
    setUploading(fotoId)
    console.log(`Iniciando upload para ${fotoId}:`, file.name, file.type, file.size)

    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('fileName', `${fotoId}.jpg`)

      console.log('Enviando para API...')
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      console.log('Resposta da API:', res.status, res.statusText)

      if (!res.ok) {
        const errorText = await res.text()
        console.error('Erro na API:', errorText)
        setUploading(null)
        return
      }

      const data = (await res.json()) as { url?: string }
      console.log('Dados recebidos:', data)

      if (data.url) {
        setImageOverrides((prev) => ({
          ...prev,
          [fotoId]: `${data.url}?t=${Date.now()}`,
        }))
        
        // Remove do pending após sucesso
        setPendingUploads(prev => {
          const newPending = { ...prev }
          delete newPending[fotoId]
          return newPending
        })
        
        console.log(`Imagem ${fotoId} atualizada com sucesso`)
        
        const updateData = {
          fotoId,
          url: data.url,
          timestamp: Date.now()
        }
        
        localStorage.setItem('midiaImageUpdate', JSON.stringify(updateData))
        
        window.dispatchEvent(new CustomEvent('midiaImageUpdated', {
          detail: updateData
        }))
      } else {
        console.error('URL não recebida da API')
      }
    } catch (error) {
      console.error('Erro no upload:', error)
    } finally {
      setUploading(null)
    }
  }

  function handleConfirmUpload(fotoId: string) {
    const file = pendingUploads[fotoId]
    if (file) {
      handleUpload(fotoId, file)
    }
  }

  function handleCancelUpload(fotoId: string) {
    setPendingUploads(prev => {
      const newPending = { ...prev }
      delete newPending[fotoId]
      return newPending
    })
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1
        className="
            text-[83.04px] 
            font-bebas
            font-bold 
            mt-[122px]
            pb-[-10px]
            bg-gradient-to-r 
            from-[#c3d33f] 
            to-[#079c9e]
            bg-clip-text
            text-transparent uppercase text-center"
      >
        Nossos Formatos de Mídia
      </h1>

      <div className="w-fit mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
        {formatos.map((formato) => (
          <div
            key={formato.id}
            className="relative w-[271.25px] h-[297px] overflow-hidden group cursor-pointer"
          >
            <img
              src={formato.img}
              alt=""
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
            <div className="absolute inset-0 bg-black/60 transition-colors duration-500 group-hover:bg-black/30"></div>

            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="border-2 border-white px-3 py-2 flex items-center justify-center">
                <h3 className="text-white font-bebas md:text-[30px] leading-none tracking-wider text-center mt-1">
                  {formato.title}
                </h3>
              </div>
            </div>

            <div className="absolute left-0 right-0 bottom-0 p-3">
              {pendingUploads[formato.id] ? (
                <div className="space-y-2">
                  <div className="text-xs text-white bg-green-600 p-2 rounded">
                    Arquivo selecionado: {pendingUploads[formato.id].name}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleConfirmUpload(formato.id)}
                      disabled={uploading === formato.id}
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white text-xs px-2 py-1 rounded disabled:opacity-50"
                    >
                      {uploading === formato.id ? 'Enviando...' : 'Confirmar'}
                    </button>
                    <button
                      onClick={() => handleCancelUpload(formato.id)}
                      disabled={uploading === formato.id}
                      className="flex-1 bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-1 rounded disabled:opacity-50"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              ) : (
                <label className="block">
                  <span className="sr-only">Trocar foto</span>
                  <input
                    type="file"
                    accept="image/*"
                    disabled={uploading === formato.id}
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (!file) return
                      handleFileSelect(formato.id, file)
                    }}
                    className="block w-full text-xs text-white file:mr-3 file:rounded file:border-0 file:bg-white/90 file:px-3 file:py-1 file:text-black hover:file:bg-white"
                  />
                </label>
              )}

              {uploading === formato.id && !pendingUploads[formato.id] ? (
                <div className="mt-2 text-xs text-white">Enviando...</div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
