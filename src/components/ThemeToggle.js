"use client"

import React, { useState, useEffect } from "react"

const ThemeToggle = () => {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme") || "dark")
  }, [])

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark"
    document.documentElement.setAttribute("data-theme", next)
    try {
      localStorage.setItem("theme", next)
    } catch (e) {}
    window.dispatchEvent(new Event("themechange"))
    setTheme(next)
  }

  // Render nothing until mounted so the static export matches on hydration
  if (!theme) return <button className="theme-toggle" aria-hidden="true" />

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    >
      <span className="theme-toggle__half theme-toggle__half--light" />
      <span className="theme-toggle__half theme-toggle__half--dark" />
    </button>
  )
}

export default ThemeToggle
