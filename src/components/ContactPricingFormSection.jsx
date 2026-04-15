import { useState } from 'react'
import { sendContactRequest, validateContactPayload } from '../lib/contactRequest'

const initialFormState = {
  name: '',
  email: '',
  organization: '',
  licensingNeeds: '',
  companyWebsite: '',
}

export function ContactPricingFormSection({ content }) {
  const [formData, setFormData] = useState(initialFormState)
  const [fieldErrors, setFieldErrors] = useState({})
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
    setFieldErrors((current) => {
      if (!current[name]) return current
      return { ...current, [name]: '' }
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const validation = validateContactPayload(formData)

    if (!validation.isValid) {
      setFieldErrors(validation.errors)
      setStatus({ type: 'error', message: content.validationMessage || content.errorMessage })
      return
    }

    setIsSubmitting(true)
    setStatus({ type: 'idle', message: '' })
    setFieldErrors({})

    try {
      await sendContactRequest(formData)

      setFormData(initialFormState)
      setStatus({ type: 'success', message: content.successMessage })
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || content.errorMessage,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="contact-pricing-form" aria-labelledby="contact-pricing-form-title">
      <div className="contact-pricing-form__inner">
        <h2 id="contact-pricing-form-title" className="contact-pricing-form__sr-only">
          Request Pricing
        </h2>

        <form className="contact-pricing-form__form" onSubmit={handleSubmit} noValidate>
          <label className="contact-pricing-form__field">
            <span className="contact-pricing-form__label">{content.fields.name.label}</span>
            <input
              className="contact-pricing-form__input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              placeholder={content.fields.name.placeholder}
              aria-invalid={Boolean(fieldErrors.name)}
              aria-describedby={fieldErrors.name ? 'contact-form-name-error' : undefined}
              required
            />
            {fieldErrors.name && (
              <span className="contact-pricing-form__error" id="contact-form-name-error">
                {fieldErrors.name}
              </span>
            )}
          </label>

          <label className="contact-pricing-form__field">
            <span className="contact-pricing-form__label">{content.fields.email.label}</span>
            <input
              className="contact-pricing-form__input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              placeholder={content.fields.email.placeholder}
              aria-invalid={Boolean(fieldErrors.email)}
              aria-describedby={fieldErrors.email ? 'contact-form-email-error' : undefined}
              required
            />
            {fieldErrors.email && (
              <span className="contact-pricing-form__error" id="contact-form-email-error">
                {fieldErrors.email}
              </span>
            )}
          </label>

          <label className="contact-pricing-form__field">
            <span className="contact-pricing-form__label">{content.fields.organization.label}</span>
            <input
              className="contact-pricing-form__input"
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              autoComplete="organization"
              placeholder={content.fields.organization.placeholder}
              aria-invalid={Boolean(fieldErrors.organization)}
              aria-describedby={fieldErrors.organization ? 'contact-form-organization-error' : undefined}
              required
            />
            {fieldErrors.organization && (
              <span className="contact-pricing-form__error" id="contact-form-organization-error">
                {fieldErrors.organization}
              </span>
            )}
          </label>

          <label className="contact-pricing-form__field">
            <span className="contact-pricing-form__label">{content.fields.licensingNeeds.label}</span>
            <textarea
              className="contact-pricing-form__textarea"
              name="licensingNeeds"
              value={formData.licensingNeeds}
              onChange={handleChange}
              rows={6}
              placeholder={content.fields.licensingNeeds.placeholder}
              aria-invalid={Boolean(fieldErrors.licensingNeeds)}
              aria-describedby={fieldErrors.licensingNeeds ? 'contact-form-licensing-error' : undefined}
              required
            />
            {fieldErrors.licensingNeeds && (
              <span className="contact-pricing-form__error" id="contact-form-licensing-error">
                {fieldErrors.licensingNeeds}
              </span>
            )}
          </label>

          <div className="contact-pricing-form__honeypot" aria-hidden="true">
            <label>
              Company website
              <input
                type="text"
                name="companyWebsite"
                value={formData.companyWebsite}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </label>
          </div>

          <div className="contact-pricing-form__footer">
            <button className="contact-pricing-form__submit" type="submit" disabled={isSubmitting}>
              <span>{isSubmitting ? 'Sending...' : content.submitLabel}</span>
            </button>

            {status.type !== 'idle' && (
              <p
                className={`contact-pricing-form__status contact-pricing-form__status--${status.type}`}
                role={status.type === 'error' ? 'alert' : 'status'}
              >
                {status.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
