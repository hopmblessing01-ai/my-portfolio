import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

function ContactsSection({ profile }) {
  const mapCoordinates = '52.984874,-1.123010'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitState, setSubmitState] = useState({
    status: 'idle',
    message: '',
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setSubmitState({
        status: 'error',
        message: 'Email setup is incomplete. Add EmailJS variables to your .env file.',
      })
      return
    }

    try {
      setSubmitState({ status: 'loading', message: 'Sending your message...' })
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email,
          to_email: profile.email,
        },
        publicKey
      )

      setSubmitState({
        status: 'success',
        message: 'Thanks for reaching out. Your message has been sent successfully.',
      })
      setFormData({
        name: '',
        email: '',
        message: '',
      })
    } catch {
      setSubmitState({
        status: 'error',
        message: 'Message could not be sent. Please try again in a moment.',
      })
    }
  }

  return (
    <>
      <div className="contact-top">
        <div className="map-box">
          <iframe
            title="Map to Combo Mount, Breckhill Road, Mapperley, Nottingham"
            src={`https://maps.google.com/maps?q=${mapCoordinates}&t=&z=17&ie=UTF8&iwloc=B&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <article className="contact-card">
          <h1>Contact Info</h1>
          <div className="contact-row">
            <span className="c-icon blue">
              <FiMapPin />
            </span>
            <div className="contact-text contact-text-address">{profile.location}</div>
          </div>
          <div className="contact-row">
            <span className="c-icon cyan">
              <FiPhone />
            </span>
            <div className="contact-text contact-text-phone">
              <a className="contact-link" href={`tel:${profile.phone.replace(/\s+/g, '')}`}>
                {profile.phone}
              </a>
            </div>
          </div>
          <div className="contact-row">
            <span className="c-icon yellow">
              <FiMail />
            </span>
            <div className="contact-text contact-text-email">
              <a className="contact-link" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </div>
          </div>
        </article>
      </div>

      <div className="contact-bottom">
        <form className="contact-form" onSubmit={handleSubmit}>
          <br />
          <h3>Let's Keep In Touch</h3>
          <div className="row contact-form-row">
            <label>
              Name<span className="required">*</span>
              <input name="name" type="text" value={formData.name} onChange={handleInputChange} required />
            </label>
            <label>
              Email<span className="required">*</span>
              <input name="email" type="email" value={formData.email} onChange={handleInputChange} required />
            </label>
          </div>
          <label>
            Your Message<span className="required">*</span>
            <textarea
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit" disabled={submitState.status === 'loading'}>
            {submitState.status === 'loading' ? 'Sending...' : 'Submit'}
          </button>
          {submitState.status !== 'idle' && (
            <p className={`form-status ${submitState.status}`}>{submitState.message}</p>
          )}
        </form>
      </div>
    </>
  )
}

export default ContactsSection
