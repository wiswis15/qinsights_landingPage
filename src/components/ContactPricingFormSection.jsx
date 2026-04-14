import { useState } from 'react'

const initialFormState = {
  name: '',
  email: '',
  organization: '',
  licensingNeeds: '',
  companyWebsite: '',
}

export function ContactPricingFormSection({ content }) {
  const [formData, setFormData] = useState(initialFormState)
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: 'idle', message: '' })

    try {
      const response = await fetch(content.action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || content.errorMessage)
      }

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
              required
            />
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
              required
            />
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
              required
            />
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
              required
            />
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
