"use client"

import React, { useEffect, useContext, useState, useRef } from "react"
import { usePathname } from "next/navigation"
import TilesFlowContext from "../src/components/utils/TilesFlowContext"

const PageTemplate = ({ children }) => {
  const readingTracker = useContext(TilesFlowContext)
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (readingTracker) {
      readingTracker.onPageChange(pathname)
    }
  }, [pathname, readingTracker])

  useEffect(() => {
    // Trigger fade-in on mount
    setMounted(true)
  }, [])

  return (
    <div
      ref={ref}
      className={`page-transition-enter ${mounted ? 'page-transition-enter-active' : ''}`}
    >
      {children}
    </div>
  )
}

export default PageTemplate
