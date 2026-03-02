'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'
import { Eye, EyeOff, Lock, Mail } from 'lucide-react'

export default function AdminLoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const next = searchParams.get('next') || '/admin'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (!res.ok) {
        setError('Email ou senha inválidos')
        return
      }

      window.dispatchEvent(new Event('admin-auth-changed'))

      router.replace(next)
      router.refresh()
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen fixed inset-0 bg-black">
      {/* Imagem de fundo com overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/outdoor6.jpg"
          alt="Background"
          fill
          sizes="100vw"
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Modal de login centralizado */}
      <div className="relative h-screen w-full flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Logo/Brand */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl mb-4 shadow-2xl overflow-hidden">
              <Image
                src="/images/logo.png"
                alt="Arena Logo"
                width={80}
                height={80}
                className="w-full h-full object-contain p-2"
              />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Arena Admin</h1>
            <p className="text-gray-300 text-sm">Acesso exclusivo ao painel administrativo</p>
          </div>

          <form onSubmit={handleLogin} className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8">
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 mb-6">
                <p className="text-red-400 text-sm text-center">{error}</p>
              </div>
            )}

            <div className="space-y-5">
              {/* Email Field */}
              <div className="relative">
                <label className="block text-white text-sm font-medium mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#079c9e] focus:border-transparent transition-all"
                    autoComplete="username"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="relative">
                <label className="block text-white text-sm font-medium mb-2">Senha</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#079c9e] focus:border-transparent transition-all"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-8 bg-gradient-to-r from-[#079c9e] to-[#c3d33f] hover:from-[#068a8c] hover:to-[#b0c038] disabled:from-gray-600 disabled:to-gray-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl disabled:shadow-none disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Entrando...
                </span>
              ) : (
                'Entrar'
              )}
            </button>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-gray-400 text-xs">
                © 2026 Arena. Todos os direitos reservados.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
