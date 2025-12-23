import { CtaButton } from "./cta-button"

const painPoints = [
  {
    emoji: "🚫",
    title: "Operating in a legal gray area",
    description:
      "Cooking from home means you can't get licensed, can't advertise legally, and one complaint to the health department could shut everything down.",
  },
  {
    emoji: "📦",
    title: "Turning down orders you could fill",
    description:
      "Without commercial refrigeration and dry storage, you're limited to small batches. Bigger jobs and bulk ingredient buying aren't possible.",
  },
  {
    emoji: "😰",
    title: "Uncertain about inspections and permits",
    description:
      "You know you need to get legal, but the permit process feels overwhelming. Meanwhile, every order carries risk.",
  },
]

export function PainPointsSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <div className="section-header">
          <h2 className="section-title">
            You have the skills and the customers.
            <br />
            What you're missing is the facility:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <div key={index} className="problem-card">
              <div className="problem-icon">{point.emoji}</div>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-10">
        <CtaButton />
      </div>
    </section>
  )
}
