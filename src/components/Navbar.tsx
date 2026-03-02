'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';
import AdminLogoutButton from '@/components/AdminLogoutButton'
import AdminEditButton from '@/components/AdminEditButton'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const pathname = usePathname()

    useEffect(() => {
        let cancelled = false;

        async function checkAuth() {
            try {
                const res = await fetch('/api/auth/check', { cache: 'no-store' })
                if (!res.ok) return
                const data = (await res.json()) as { authenticated?: boolean }
                if (!cancelled) setIsAuthenticated(Boolean(data.authenticated))
            } catch {
                if (!cancelled) setIsAuthenticated(false)
            }
        }

        function handleAuthChanged() {
            checkAuth()
        }

        checkAuth()

        window.addEventListener('admin-auth-changed', handleAuthChanged)

        return () => {
            cancelled = true;
            window.removeEventListener('admin-auth-changed', handleAuthChanged)
        }
    }, [])

    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'Outdoor', href: '/outdoor' },
        { label: "Imídia Painéis", href: '/imidia-paineis' },
        { label: 'Imídia Litoral', href: '/imidia-litoral' },
        { label: 'Imídia Live LED', href: '/imidia-live-led' },
        { label: 'Formatos de Mídia', href: '/formatos-de-midia' },
        { label: 'Nossos Materiais', href: '/nossos-materiais' },
    ]

    return (
        <header className="fixed z-50 h-[60px] w-full bg-primary flex justify-end py-[21px]">
            <nav className="w-full flex items-center justify-between">
                <div className="hidden md:flex items-center pl-[40px]">
                    {isAuthenticated && (pathname === '/' || pathname === '/admin') ? (
                        <>
                            <AdminLogoutButton />
                            {pathname === '/' && <AdminEditButton />}
                        </>
                    ) : null}
                </div>

                <ul className="hidden md:flex items-center gap-[38px] justify-end pr-[40px] font-bebas">
                    {navLinks.map((link) => (
                        <li key={link.href} className="whitespace-nowrap">
                            <Link
                                href={link.href}
                                className="text-[21.87px] uppercase font-bold tracking-wider text-white hover:text-dark transition-colors duration-200"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden flex flex-col gap-1.5 pr-4 z-50"
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>

                <div className={`md:hidden fixed top-[60px] left-0 w-full bg-primary transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <ul className="flex flex-col items-center py-4 font-bebas">
                        {isAuthenticated && (pathname === '/' || pathname === '/admin') ? (
                            <li className="w-full text-center border-b border-white/10 py-3 flex justify-center gap-2">
                                <AdminLogoutButton />
                                {pathname === '/' && <AdminEditButton />}
                            </li>
                        ) : null}
                        {navLinks.map((link) => (
                            <li key={link.href} className="w-full text-center border-b border-white/10">
                                <Link
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block text-[18px] uppercase font-bold tracking-wider text-white hover:text-dark transition-colors duration-200 py-3"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    )
}