import { useMemo, useState, type FormEvent, type ReactNode } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products } from '../data/products.js'
import { Button } from './Button'

type Fields = {
  name: string
  email: string
  phone: string
  company: string
  subject: string
  product: string
  message: string
}

const empty: Fields = {
  name: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  product: '',
  message: '',
}

function validate(f: Fields) {
  const e: Partial<Record<keyof Fields, string>> = {}
  if (!f.name.trim()) e.name = 'Please enter your full name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Please enter a valid email address.'
  if (!f.phone.trim() || f.phone.replace(/\D/g, '').length < 7) e.phone = 'Please enter a valid phone number.'
  if (!f.company.trim()) e.company = 'Please enter your company or organisation.'
  if (!f.subject.trim()) e.subject = 'Please add a subject so we can route your note.'
  if (!f.message.trim() || f.message.trim().length < 10) {
    e.message = 'A short message helps us prepare a useful reply (10+ characters).'
  }
  return e
}

export function ContactForm() {
  const [params] = useSearchParams()
  const preset = params.get('product') ?? ''
  const presetName = products.find((p) => p.slug === preset)?.name ?? ''
  const initial = useMemo<Fields>(
    () => ({
      ...empty,
      product: presetName ? preset : '',
      subject: presetName ? `Enquiry: ${presetName}` : '',
    }),
    [preset, presetName],
  )
  const [fields, setFields] = useState<Fields>(initial)
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({})
  const [done, setDone] = useState(false)

  function onSubmit(ev: FormEvent) {
    ev.preventDefault()
    const next = validate(fields)
    setErrors(next)
    if (Object.keys(next).length) return
    setDone(true)
  }

  if (done) {
    return (
      <div className="contact-success" role="status">
        <p className="kicker">Received</p>
        <h3>Thank you — we have your note.</h3>
        <p>
          A public email address has not been published yet, so this form does not send to a server.
          Please keep a copy of what you wrote, and use the contact details on this page once they
          are confirmed.
        </p>
      </div>
    )
  }

  function field(key: keyof Fields, label: string, el: ReactNode, hint?: string) {
    const err = errors[key]
    const id = `contact-${key}`
    const errId = `${id}-error`
    return (
      <div className={key === 'message' || key === 'subject' || key === 'product' ? 'span-2' : undefined}>
        <label htmlFor={id}>
          {label}
          {el}
        </label>
        {hint && !err ? <span className="hint">{hint}</span> : null}
        {err ? (
          <span className="error" id={errId} role="alert">
            {err}
          </span>
        ) : null}
      </div>
    )
  }

  const set =
    (key: keyof Fields) =>
    (e: { target: { value: string } }) => {
      setFields((f) => ({ ...f, [key]: e.target.value }))
      if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }))
    }

  const described = (key: keyof Fields) => (errors[key] ? `contact-${key}-error` : undefined)

  return (
    <form className="contact-form is-split" onSubmit={onSubmit} noValidate>
      <p className="form-lead span-2">
        Share as much as you like about the project. We will come back to you as soon as we can.
      </p>
      {field(
        'name',
        'Full name',
        <input
          id="contact-name"
          name="name"
          autoComplete="name"
          value={fields.name}
          onChange={set('name')}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={described('name')}
        />,
      )}
      {field(
        'email',
        'Email address',
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={fields.email}
          onChange={set('email')}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={described('email')}
        />,
      )}
      {field(
        'phone',
        'Phone number',
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={fields.phone}
          onChange={set('phone')}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={described('phone')}
        />,
      )}
      {field(
        'company',
        'Company / organisation',
        <input
          id="contact-company"
          name="company"
          autoComplete="organization"
          value={fields.company}
          onChange={set('company')}
          aria-invalid={Boolean(errors.company)}
          aria-describedby={described('company')}
        />,
      )}
      {field(
        'subject',
        'Subject',
        <input
          id="contact-subject"
          name="subject"
          value={fields.subject}
          onChange={set('subject')}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={described('subject')}
        />,
      )}
      {field(
        'product',
        'Product of interest (optional)',
        <select
          id="contact-product"
          name="product"
          value={fields.product}
          onChange={set('product')}
        >
          <option value="">Any / not sure yet</option>
          {products.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.name}
            </option>
          ))}
        </select>,
      )}
      {field(
        'message',
        'Message',
        <textarea
          id="contact-message"
          name="message"
          value={fields.message}
          onChange={set('message')}
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={described('message')}
        />,
        'Quantities, destination and timing help — only if you already know them.',
      )}
      <div className="span-2 contact-form-cta">
        <Button type="submit">Send message</Button>
        <p>No spam. One conversation, treated with care.</p>
      </div>
    </form>
  )
}
