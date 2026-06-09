"use client"

import { useEffect } from "react"
import Link from "next/link"

// Client-side redirect for the legacy /nft/<slug> URLs. The site is a static
// export (no server redirects), so the generated page bounces to /art/<slug>
// on load; the visible link is the no-JS / crawler fallback.
const RedirectToArt = ({ to }) => {
  useEffect(() => {
    window.location.replace(to)
  }, [to])

  return (
    <p>
      This page has moved to <Link href={to}>{to}</Link>. Redirecting…
    </p>
  )
}

export default RedirectToArt
