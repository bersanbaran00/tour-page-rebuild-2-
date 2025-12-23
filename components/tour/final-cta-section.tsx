"use client"

import { useState, useEffect } from "react"

export function FinalCtaSection() {
  const [calendarLoaded, setCalendarLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setCalendarLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="final-cta-section" id="cta">
      <div className="final-cta-content container mx-auto px-5 max-w-[900px]">
        <h2 className="final-cta-headline">Ready to see if this works for you?</h2>
        <p className="final-cta-subtext">
          Pick a time. Walk through the kitchen. Get your questions answered. That's it — no commitment required.
        </p>

        <div className={`final-calendar-embed ${calendarLoaded ? "loaded" : ""}`}>
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0r8IqTL6IHyX6thXNYD2-wj5yP3qAYu5DfKVE-H8tO3M5_5P9L7bQK1Lw2?gv=true"
            style={{ border: 0 }}
            width="100%"
            height="500"
            frameBorder="0"
            title="Schedule a tour at Shared Kitchen Network"
          />
        </div>

        <div className="final-cta-trust">
          <div className="cta-feature">Free 20-minute tour</div>
          <div className="cta-feature">No obligation to sign up</div>
          <div className="cta-feature">Real kitchen, real people</div>
        </div>
      </div>
    </section>
  )
}
