"use client"

import { useState, useEffect } from "react"

export function HeroSection() {
  const [calendarLoaded, setCalendarLoaded] = useState(false)

  useEffect(() => {
    // Small delay to ensure smooth loading animation
    const timer = setTimeout(() => setCalendarLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="hero-story">
      {/* Main Hero Content */}
      <div className="hero-story-content">
        <div className="hero-text-side">
          <h1 className="hero-headline">
            You've got the recipes.
            <br />
            <span className="hero-headline-accent">You've got the passion.</span>
          </h1>
          <p className="hero-subheadline">But right now, you're stuck between ambition and legality.</p>

          <div className="story-block">
            <p className="story-intro">You're probably dealing with:</p>
            <ul className="story-list">
              <li>
                <span className="story-icon">🏠</span>
                <span>Cooking at home and hoping nobody reports you</span>
              </li>
              <li>
                <span className="story-icon">📉</span>
                <span>Turning down large orders because you're not licensed</span>
              </li>
              <li>
                <span className="story-icon">😰</span>
                <span>Stress every time the health department comes up</span>
              </li>
              <li>
                <span className="story-icon">🚧</span>
                <span>No real place to grow without risk</span>
              </li>
            </ul>
          </div>

          <div className="relief-block">
            <h2 className="relief-headline">There's a faster, legal way forward.</h2>
            <p className="relief-text">
              Shared Kitchen Network is not an idea — it's approved infrastructure. A health-department-inspected
              commercial kitchen where you can operate legally, starting this week.
            </p>
            <div className="relief-badges">
              <span className="relief-badge">
                <span className="badge-check">✓</span> Health Dept. Approved
              </span>
              <span className="relief-badge">
                <span className="badge-check">✓</span> Passes All Inspections
              </span>
              <span className="relief-badge">
                <span className="badge-check">✓</span> Operating Since 2018
              </span>
            </div>
          </div>
        </div>

        <div className="hero-calendar-side">
          <div className="calendar-container">
            <div className="calendar-header">
              <h3 className="calendar-title">Schedule a Walk-Through</h3>
              <p className="calendar-subtitle">No commitment. Just a 20-minute look around.</p>
            </div>
            <div className={`calendar-embed ${calendarLoaded ? "loaded" : ""}`}>
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0r8IqTL6IHyX6thXNYD2-wj5yP3qAYu5DfKVE-H8tO3M5_5P9L7bQK1Lw2?gv=true"
                style={{ border: 0 }}
                width="100%"
                height="600"
                frameBorder="0"
                title="Schedule a tour at Shared Kitchen Network"
              />
            </div>
            <div className="calendar-trust">
              <span>🔒 Your information stays private</span>
              <span>📅 Pick any time that works</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
