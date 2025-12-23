const steps = [
  {
    number: "01",
    title: "See the space",
    description:
      "Walk through the prep stations, equipment, coolers, and storage. See exactly what you'd have access to.",
  },
  {
    number: "02",
    title: "Tell us about your business",
    description: "Share what you're cooking and how often. We'll explain which membership fits your schedule.",
  },
  {
    number: "03",
    title: "Get your questions answered",
    description: "Permits, pricing, availability, storage — we'll cover everything so there are no surprises.",
  },
  {
    number: "04",
    title: "Take the info home",
    description: "No pressure to decide on the spot. You'll have everything you need to make the right choice.",
  },
]

export function TourStepsSection() {
  return (
    <section className="tour-details">
      <div className="tour-content container mx-auto px-5 max-w-[1200px]">
        <div className="section-header">
          <h2 className="section-title" style={{ color: "white" }}>
            What Happens During the Tour
          </h2>
          <p className="text-white/80 text-lg mt-2">A simple, no-pressure walk-through</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="tour-step">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>

        <div className="tour-notice">
          <strong>About 20 minutes total.</strong> Tours are one-on-one so we can focus on your specific situation.
        </div>

        <div className="no-pressure-block">
          <p className="no-pressure-title">What does NOT happen:</p>
          <div className="no-pressure-items">
            <span>❌ No sales pitch</span>
            <span>❌ No pressure to sign</span>
            <span>❌ No follow-up calls unless you ask</span>
          </div>
        </div>
      </div>
    </section>
  )
}
