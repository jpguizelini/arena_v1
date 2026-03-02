'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function AdminLogoutButton() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleLogout() {
    if (loading) return
    setLoading(true)

    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      window.dispatchEvent(new Event('admin-auth-changed'))
    } finally {
      router.replace('/')
      router.refresh()
    }
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={loading}
      className="bg-white hover:bg-gray-100 disabled:bg-gray-200 text-primary px-4 py-2 rounded font-medium transition-colors"
    >
      {loading ? 'Saindo...' : 'Logout'}
    </button>
  )
}
