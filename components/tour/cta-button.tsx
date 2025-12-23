import Link from "next/link"

export function CtaButton() {
  return (
    <Link
      href="https://calendar.app.google/K5R3rbdRg5nCuXjZ8"
      target="_blank"
      rel="noopener noreferrer"
      className="cta-button"
    >
      <span className="cta-button-text">
        Schedule a Free Tour →<span className="cta-button-small">No commitment required</span>
      </span>
    </Link>
  )
}
