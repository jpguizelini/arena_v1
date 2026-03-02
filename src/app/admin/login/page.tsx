import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import AdminLoginForm from '@/components/AdminLoginForm'

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }> | { next?: string }
}) {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')

  const { next } = await Promise.resolve(searchParams)

  if (session?.value === 'authenticated') {
    redirect(next || '/admin')
  }

  return <AdminLoginForm />
}
