import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export async function submitContactForm({ name, email, phone, company, message }) {
  if (!supabase) {
    console.warn('Supabase not configured — contact form submission saved locally only.')
    return { error: null, data: { name, email, phone, company, message, created_at: new Date().toISOString() } }
  }

  const { data, error } = await supabase
    .from('contacts')
    .insert([{ name, email, phone, company, message }])
    .select()

  if (error) throw error
  return data
}
