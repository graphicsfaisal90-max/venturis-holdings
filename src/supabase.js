import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export async function submitJobApplication(formData, resumeFile) {
  if (!supabase) {
    console.warn('Supabase not configured — job application saved locally only.')
    return { error: null, data: { ...formData, created_at: new Date().toISOString() } }
  }

  let resumeUrl = null
  if (resumeFile) {
    const fileExt = resumeFile.name.split('.').pop()
    const fileName = `resumes/${formData.fullName.replace(/\s+/g, '_')}_${Date.now()}.${fileExt}`
    const { error: uploadError } = await supabase.storage
      .from('job-applications')
      .upload(fileName, resumeFile)

    if (uploadError) throw new Error('Failed to upload resume. Please try again.')

    const { data: { publicUrl } } = supabase.storage
      .from('job-applications')
      .getPublicUrl(fileName)

    resumeUrl = publicUrl
  }

  const { data, error } = await supabase
    .from('job_applications')
    .insert([{ ...formData, resume_url: resumeUrl }])
    .select()

  if (error) throw error
  return data
}

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
