import React, { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Contact from ${name || 'Website'}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:alwagh.45@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2>Contact</h2>
        <div className="contact-info">
          <div>
            <p><strong>Phone:</strong> <a href="tel:+919130387384">+91 9130387384</a></p>
            <p><strong>Email:</strong> <a href="mailto:alwagh.45@gmail.com">alwagh.45@gmail.com</a></p>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
          </label>

          <label>
            Email
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
          </label>

          <label>
            Message
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Say hello..." />
          </label>

          <div>
            <button className="btn" type="submit">Send</button>
          </div>
        </form>
      </div>
    </section>
  )
}
