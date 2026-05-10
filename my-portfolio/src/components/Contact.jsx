import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [reason, setReason] = useState("Project inquiry");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [file,setFile]=useState(null)
  const formRef=useRef();

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email) {
      alert("Please fill in your name and email before sending.");
      return;
    }

    const templateParams = {
      from_name:name,
      position: position,
      from_email: email,
      reason: reason,
      message: message,
      from_file:file,
    };

    Promise.all([
      emailjs
      .send(
        "service_kxiv1lr",
        "template_g4zai9h",
        templateParams,
        "EAwLzVONDowFV7ej2",
      ),
      emailjs.send(
        "service_kxiv1lr",
        "template_i5bbdh7",
        templateParams,
        "EAwLzVONDowFV7ej2"
      )
    ])
      .then(() => {
        alert("Message sent successfully!");
        setStatusMessage("Your message has been sent.");
        setName("");
        setEmail("");
        setPosition("");
        setMessage("");
        setFile(e.target.file);
      })
      .catch(() => {
        setStatusMessage("Failed to send message. Please try again.");
        alert("Oops! Something went wrong. Please try again later.");
      });
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-top">
          <h2>Contact</h2>
          <p className="contact-description">
            Ready to collaborate on a polished web experience? Share your idea
            and I’ll get back to you shortly.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card contact-card-info">
            <div className="contact-card-inner">
              <h3>Let’s connect</h3>
              <p className="contact-subtitle">
                Fast replies, friendly guidance, and clean execution for your
                next project.
              </p>
              <div className="contact-info">
                <div>
                  <p>
                    <strong>Phone:</strong>{" "}
                    <a href="tel:+91-9130387384">+91 9130387384</a>
                  </p>
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:alwagh.45@gmail.com">alwagh.45@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-card contact-card-form-wrap">
            <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
              <label>
                Name <span className="required">*</span>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                />
              </label>

              <label>
                Position <span className="required">*</span>
                <input
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  placeholder="Your role or position"
                />
              </label>

              <label>
                Email <span className="required">*</span>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                />
              </label>

              <label>
                Reason for contact <span className="required">*</span>
                <select
                  required
                  className="dropdown"
                  value={reason}
                  placeholder="Select a reason"
                  onChange={(e) => setReason(e.target.value)}
                >
                  <option>Project inquiry</option>
                  <option>Design review</option>
                  <option>Collaboration</option>
                  <option>Website support</option>
                  <option>Job Application</option>
                  <option>Other</option>
                </select>
              </label>
              <label>
                Attach a file <span className="required">*</span>
                <input type="file" accept=".pdf,.doc,.docx" placeholder="File upload coming soon" />
              </label>
              <label>
                Message (optional)
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Say hello..."
                />
              </label>

              <div className="contact-form-footer">
                <button
                  className="btn btn-primary-small contact-submit"
                  type="submit"
                >
                  Send Message
                </button>
                <span className="contact-note">
                  I typically respond within 24 hours.
                </span>
              </div>
              {statusMessage && (
                <p className="contact-status">{statusMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
