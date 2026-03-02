import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import HomeSections from '@/components/HomeSections'
import MidiaFormatsAdmin from '@/components/MidiaFormatsAdmin'

export default async function AdminPage() {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')

  if (!session || session.value !== 'authenticated') {
    redirect('/admin/login?next=/admin')
  }

  return (
    <HomeSections midiaFormats={<MidiaFormatsAdmin />} />
  )
}