const solutions = [
  {
    emoji: "📋",
    title: "Permit paperwork provided",
    description: "We give you the exact documentation the health department requires. No guessing, no delays.",
  },
  {
    emoji: "🏆",
    title: "Fully inspected commercial kitchen",
    description: "Our facility passes every health inspection. When you operate here, you inherit that compliance.",
  },
  {
    emoji: "🧊",
    title: "Your own dedicated storage",
    description: "Reserved space in our walk-in cooler and dry storage area — secured, labeled, and always available.",
  },
  {
    emoji: "📈",
    title: "Operate legally and grow",
    description: "Accept orders openly, market your business publicly, and take on larger jobs without legal risk.",
  },
]

export function SolutionSection() {
  return (
    <section className="solution-section">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <div className="section-header">
          <h2 className="section-title">What You Actually Get</h2>
          <p className="solution-timeline">Most members complete setup and start operating within 5-7 days</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{solution.emoji}</div>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </div>
          ))}
        </div>

        <div className="price-highlight">Membership typically pays for itself with one or two jobs.</div>
      </div>
    </section>
  )
}
