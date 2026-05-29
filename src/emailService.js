import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export function isEmailConfigured() {
  return !!(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)
}

export async function sendJobApplicationEmail(formData, resumeFileName) {
  if (!isEmailConfigured()) {
    console.warn('EmailJS not configured — email notification skipped.')
    return
  }

  const templateParams = {
    to_email: 'careers@venturisholdings.com',
    from_name: formData.fullName,
    from_email: formData.email,
    from_phone: formData.phone,
    position: formData.position,
    division: formData.division,
    experience: formData.experience || 'Not specified',
    current_company: formData.currentCompany || 'Not specified',
    current_role: formData.currentRole || 'Not specified',
    qualification: formData.qualification,
    field_of_study: formData.fieldOfStudy || 'Not specified',
    institution: formData.institution || 'Not specified',
    employment_type: formData.employmentType,
    start_date: formData.startDate || 'Not specified',
    address: formData.address || 'Not specified',
    linkedin_url: formData.linkedinUrl || 'Not specified',
    portfolio_url: formData.portfolioUrl || 'Not specified',
    cover_letter: formData.coverLetter || 'Not provided',
    hear_about: formData.hearAbout || 'Not specified',
    resume_file: resumeFileName || 'Not uploaded',
  }

  await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
}
