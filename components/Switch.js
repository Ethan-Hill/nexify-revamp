import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import React from "react"

export default function Switch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const toggleLight = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <div className="absolute p-3 bottom-5 right-5" onClick={toggleLight}>
      <sl-theme name={theme === "light" ? "dark" : "light"}>
        <sl-button>
          <sl-icon name="lightning-fill"></sl-icon>
        </sl-button>
      </sl-theme>
    </div>
  )
}
