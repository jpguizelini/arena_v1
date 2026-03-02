import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
  // Verifica autenticação
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')
  
  if (!session || session.value !== 'authenticated') {
    console.log('Upload não autorizado - sessão inválida')
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
  }

  const formData = await request.formData()
  const file = formData.get('file') as File
  const fileName = formData.get('fileName') as string

  console.log('Upload recebido:', { fileName, fileSize: file?.size, fileType: file?.type })

  if (!file || !fileName) {
    console.log('Arquivo ou nome inválido')
    return NextResponse.json({ error: 'Arquivo ou nome inválido' }, { status: 400 })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  console.log('Fazendo upload para Supabase...')
  const { error } = await supabaseAdmin.storage
    .from('arena-fotos')
    .upload(fileName, buffer, {
      contentType: file.type,
      upsert: true // substitui se já existir
    })

  if (error) {
    console.error('Erro no upload Supabase:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  console.log('Upload realizado com sucesso')

  const { data } = supabaseAdmin.storage
    .from('arena-fotos')
    .getPublicUrl(fileName)

  console.log('URL pública gerada:', data.publicUrl)

  return NextResponse.json({ url: data.publicUrl })
}