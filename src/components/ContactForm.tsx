import { useMemo, useState, type FormEvent, type ReactNode } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products } from '../data/products.js'
import { Button } from './Button'

type Fields = {
  name: string
  company: string
  email: string
  phone: string
  product: string
  quantity: string
  message: string
}

const empty: Fields = {
  name: '',
  company: '',
  email: '',
  phone: '',
  product: '',
  quantity: '',
  message: '',
}

function validate(f: Fields) {
  const e: Partial<Record<keyof Fields, string>> = {}
  if (!f.name.trim()) e.name = 'Enter your full name.'
  if (!f.company.trim()) e.company = 'Enter your company name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Enter a valid email address.'
  if (!f.phone.trim() || f.phone.replace(/\D/g, '').length < 7) e.phone = 'Enter a valid phone number.'
  if (!f.product) e.product = 'Select a product.'
  if (!f.message.trim() || f.message.trim().length < 10) e.message = 'Add a short message (10+ characters).'
  return e
}

export function ContactForm() {
  const [params] = useSearchParams()
  const preset = params.get('product') ?? ''
  const initial = useMemo<Fields>(
    () => ({
      ...empty,
      product: products.some((p) => p.slug === preset) ? preset : '',
    }),
    [preset],
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
      <div className="p-4" style={{ border: '1px solid var(--a1-line-dark)' }}>
        <h3 className="mb-2">Enquiry recorded</h3>
        <p className="lede">
          Thank you. A destination email has not been published yet, so this form stores
          nothing on a server. Please use the contact details on this page once they are
          confirmed, or reach the team through your existing A1 channel.
        </p>
      </div>
    )
  }

  function field<K extends keyof Fields>(key: K, label: string, el: ReactNode) {
    return (
      <label>
        {label}
        {el}
        {errors[key] ? <span className="error">{errors[key]}</span> : null}
      </label>
    )
  }

  const set =
    (key: keyof Fields) =>
    (e: { target: { value: string } }) =>
      setFields((f) => ({ ...f, [key]: e.target.value }))

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      {field(
        'name',
        'Full name',
        <input name="name" autoComplete="name" value={fields.name} onChange={set('name')} />,
      )}
      {field(
        'company',
        'Company',
        <input
          name="company"
          autoComplete="organization"
          value={fields.company}
          onChange={set('company')}
        />,
      )}
      {field(
        'email',
        'Email',
        <input
          name="email"
          type="email"
          autoComplete="email"
          value={fields.email}
          onChange={set('email')}
        />,
      )}
      {field(
        'phone',
        'Phone',
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          value={fields.phone}
          onChange={set('phone')}
        />,
      )}
      {field(
        'product',
        'Product',
        <select name="product" value={fields.product} onChange={set('product')}>
          <option value="">Select product</option>
          {products.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.name}
            </option>
          ))}
        </select>,
      )}
      {field(
        'quantity',
        'Quantity',
        <input name="quantity" value={fields.quantity} onChange={set('quantity')} placeholder="Optional" />,
      )}
      {field(
        'message',
        'Message',
        <textarea name="message" value={fields.message} onChange={set('message')} rows={5} />,
      )}
      <Button type="submit">Send enquiry</Button>
    </form>
  )
}
