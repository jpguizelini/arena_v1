'use client'

import { useRouter } from 'next/navigation'
import { Edit } from 'lucide-react'
import { useState } from 'react'

export default function AdminEditButton() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleEdit() {
    if (loading) return
    setLoading(true)

    try {
      router.push('/admin')
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handleEdit}
      disabled={loading}
      className="bg-white hover:bg-gray-100 disabled:bg-gray-200 text-primary p-2 rounded font-medium transition-colors ml-2"
      title="Editar"
    >
      <Edit size={20} />
    </button>
  )
}
