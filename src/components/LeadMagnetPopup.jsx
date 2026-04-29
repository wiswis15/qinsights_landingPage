import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { sendLeadMagnetRequest, validateLeadMagnetPayload } from '../lib/leadMagnetRequest'

const initialFormState = {
  name: '',
  email: '',
  country: '',
  companyWebsite: '',
}

function hasStoredDismissal(storageKey) {
  try {
    return window.localStorage.getItem(storageKey) === 'true'
  } catch {
    return false
  }
}

function storeDismissal(storageKey) {
  try {
    window.localStorage.setItem(storageKey, 'true')
  } catch {
    // Ignore storage failures so private browsing modes can still use the popup.
  }
}

export function LeadMagnetPopup({ content }) {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState(initialFormState)
  const [fieldErrors, setFieldErrors] = useState({})
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)
  const previouslyFocusedRef = useRef(null)

  const closePopup = useCallback(() => {
    storeDismissal(content.storageKey)
    setIsOpen(false)
  }, [content.storageKey])

  useEffect(() => {
    if (hasStoredDismissal(content.storageKey)) return undefined

    const timer = window.setTimeout(() => {
      setIsOpen(true)
    }, content.delayMs)

    return () => window.clearTimeout(timer)
  }, [content.delayMs, content.storageKey])

  useEffect(() => {
    if (!isOpen) return undefined

    previouslyFocusedRef.current = document.activeElement
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.setTimeout(() => closeButtonRef.current?.focus(), 0)

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        closePopup()
        return
      }

      if (event.key !== 'Tab' || !dialogRef.current) return

      const focusableElements = dialogRef.current.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (!firstElement || !lastElement) return

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = originalOverflow
      previouslyFocusedRef.current?.focus?.()
    }
  }, [closePopup, isOpen])

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) {
      closePopup()
    }
  }

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
    const validation = validateLeadMagnetPayload(formData)

    if (!validation.isValid) {
      setFieldErrors(validation.errors)
      setStatus({ type: 'error', message: content.validationMessage || content.errorMessage })
      return
    }

    setIsSubmitting(true)
    setStatus({ type: 'idle', message: '' })
    setFieldErrors({})

    try {
      await sendLeadMagnetRequest(formData)
      storeDismissal(content.storageKey)
      setFormData(initialFormState)
      setHasSubmitted(true)
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

  if (!isOpen) return null

  return (
    <div className="lead-magnet" onMouseDown={handleBackdropClick}>
      <div
        className="lead-magnet__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-magnet-heading"
        aria-describedby="lead-magnet-description"
        ref={dialogRef}
      >
        <button
          className="lead-magnet__close"
          type="button"
          onClick={closePopup}
          aria-label={content.closeLabel}
          ref={closeButtonRef}
        >
          <span aria-hidden="true">&times;</span>
        </button>

        <div className="lead-magnet__media" aria-hidden="true">
          <img className="lead-magnet__image" src={content.image.src} alt={content.image.alt} />
        </div>

        {hasSubmitted ? (
          <div className="lead-magnet__content lead-magnet__success">
            <p className="lead-magnet__eyebrow">{content.eyebrow}</p>
            <h2 className="lead-magnet__heading" id="lead-magnet-heading">
              {content.successHeading}
            </h2>
            <p className="lead-magnet__body" id="lead-magnet-description">
              {content.successMessage}
            </p>
            <a className="button button--primary lead-magnet__guide-link" href={content.guideUrl} target="_blank" rel="noreferrer">
              {content.guideCtaLabel}
              <span className="button__arrow" aria-hidden="true">{'\u2192'}</span>
            </a>
          </div>
        ) : (
          <div className="lead-magnet__content">
            <div className="lead-magnet__intro">
              <p className="lead-magnet__eyebrow">{content.eyebrow}</p>
              <h2 className="lead-magnet__heading" id="lead-magnet-heading">
                {content.heading}
              </h2>
              <p className="lead-magnet__body" id="lead-magnet-description">
                {content.body}
              </p>
            </div>

            <form className="lead-magnet__form" onSubmit={handleSubmit} noValidate>
              <label className="lead-magnet__field">
                <span className="lead-magnet__label">{content.fields.name.label}</span>
                <input
                  className="lead-magnet__input"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  placeholder={content.fields.name.placeholder}
                  aria-invalid={Boolean(fieldErrors.name)}
                  aria-describedby={fieldErrors.name ? 'lead-magnet-name-error' : undefined}
                  required
                />
                {fieldErrors.name && (
                  <span className="lead-magnet__error" id="lead-magnet-name-error">
                    {fieldErrors.name}
                  </span>
                )}
              </label>

              <label className="lead-magnet__field">
                <span className="lead-magnet__label">{content.fields.email.label}</span>
                <input
                  className="lead-magnet__input"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  placeholder={content.fields.email.placeholder}
                  aria-invalid={Boolean(fieldErrors.email)}
                  aria-describedby={fieldErrors.email ? 'lead-magnet-email-error' : undefined}
                  required
                />
                {fieldErrors.email && (
                  <span className="lead-magnet__error" id="lead-magnet-email-error">
                    {fieldErrors.email}
                  </span>
                )}
              </label>

              <label className="lead-magnet__field">
                <span className="lead-magnet__label">{content.fields.country.label}</span>
                <input
                  className="lead-magnet__input"
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  autoComplete="country-name"
                  placeholder={content.fields.country.placeholder}
                  aria-invalid={Boolean(fieldErrors.country)}
                  aria-describedby={fieldErrors.country ? 'lead-magnet-country-error' : undefined}
                  required
                />
                {fieldErrors.country && (
                  <span className="lead-magnet__error" id="lead-magnet-country-error">
                    {fieldErrors.country}
                  </span>
                )}
              </label>

              <div className="lead-magnet__honeypot" aria-hidden="true">
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

              <button className="button button--primary lead-magnet__submit" type="submit" disabled={isSubmitting}>
                {isSubmitting ? content.submittingLabel : content.submitLabel}
              </button>

              <p className="lead-magnet__privacy">
                {content.privacyNotice}{' '}
                <Link to="/privacy" onClick={closePopup}>
                  Privacy Policy
                </Link>
              </p>

              {status.type === 'error' && (
                <p className="lead-magnet__status lead-magnet__status--error" role="alert">
                  {status.message}
                </p>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
