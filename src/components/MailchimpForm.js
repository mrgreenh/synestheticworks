"use client"

import React, { useState, useRef } from "react"

const MAILCHIMP_URL =
  "https://synestheticworks.us20.list-manage.com/subscribe/post"
const MAILCHIMP_U = "44bb194d2a93b310c0f0d7fa1"
const MAILCHIMP_ID = "e7bc0bd8ce"

export default function SubscribeForm() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const iframeRef = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    setMessage("")

    // Submit via hidden iframe to avoid page navigation
    const form = document.createElement("form")
    form.method = "POST"
    form.action = MAILCHIMP_URL
    form.target = "mailchimp-iframe"

    const fields = { u: MAILCHIMP_U, id: MAILCHIMP_ID, EMAIL: email }
    for (const [key, value] of Object.entries(fields)) {
      const input = document.createElement("input")
      input.type = "hidden"
      input.name = key
      input.value = value
      form.appendChild(input)
    }

    document.body.appendChild(form)
    form.submit()
    form.remove()

    // We can't read the iframe response (cross-origin), so just show success after a delay
    setTimeout(() => {
      setMessage("Thanks for subscribing!")
      setLoading(false)
      setEmail("")
    }, 2000)
  }

  return (
    <>
      <iframe
        ref={iframeRef}
        name="mailchimp-iframe"
        style={{ display: "none" }}
        tabIndex={-1}
        aria-hidden="true"
      />
      <form
        name="subscribeForm"
        id="subscribe-form"
        className="subscribe-form"
        onSubmit={handleSubmit}
      >
        {!loading && message && <div className="message">{message}</div>}
        {loading && <div className="message">Loading...</div>}
        <div className="form-row">
          <label>
            <span className="screen-reader-text">
              Keep up with rare updates:
            </span>
            <input
              className="subscribe-email"
              type="email"
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>
        </div>
        <button className="button" type="submit">
          Subscribe
        </button>
      </form>
    </>
  )
}
