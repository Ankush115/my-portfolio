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
        <div className="contact-top">
          <h2>Contact</h2>
          <p className="contact-description">
            Ready to collaborate on a polished web experience? Share your idea and I’ll get back to you quickly.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card contact-card-info">
            <div className="contact-card-inner">
              <h3>Let’s connect</h3>
              <p className="contact-subtitle">
                Fast replies, friendly guidance, and clean execution for your next project.
              </p>
              <div className="contact-info">
                <div>
                  <p><strong>Phone:</strong> <a href="tel:+919130387384">+91 9130387384</a></p>
                  <p><strong>Email:</strong> <a href="mailto:alwagh.45@gmail.com">alwagh.45@gmail.com</a></p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-card contact-card-form-wrap">
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

              <div className="contact-form-footer">
                <button className="btn btn-primary-small contact-submit" type="submit">Send Message</button>
                <span className="contact-note">I typically respond within 24 hours.</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
