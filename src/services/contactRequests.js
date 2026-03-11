import { supabase } from '../lib/supabaseClient'

export async function createContactRequest(payload) {
  if (!supabase) {
    throw new Error('Supabase no está configurado. Define VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY en un archivo .env y reinicia el servidor.')
  }

  const { data, error } = await supabase.from('contact_requests').insert([payload]).select().single()
  if (error) throw error
  return data
}
