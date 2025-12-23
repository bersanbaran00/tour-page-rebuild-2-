const testimonials = [
  {
    quote:
      "I was cooking from home and constantly worried about getting reported. Within a week of joining, I had my business license and could finally advertise. The staff handled most of the paperwork.",
    author: "Sarah M.",
    business: "Catering",
    initials: "SM",
  },
  {
    quote:
      "The permit process would have taken me months to figure out on my own. They handed me what I needed, I passed my inspection first try, and now my food truck is fully legal. Revenue is up 3x because I can actually promote.",
    author: "James C.",
    business: "Food Truck",
    initials: "JC",
  },
  {
    quote:
      "I needed a commercial kitchen to sell at farmers markets. After the tour, I understood exactly what I was getting. Six months later I'm in three markets and have two wholesale accounts.",
    author: "Amanda R.",
    business: "Bakery",
    initials: "AR",
  },
]

export function TestimonialsSection() {
  return (
    <section className="testimonials">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <div className="section-header">
          <h2 className="section-title">What Members Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="review-card">
              <div className="review-header">
                <div className="stars">★★★★★</div>
                <div className="google-badge">Google</div>
              </div>
              <p className="review-text">"{testimonial.quote}"</p>
              <div className="reviewer-info">
                <div className="reviewer-avatar">{testimonial.initials}</div>
                <div>
                  <div className="reviewer-name">{testimonial.author}</div>
                  <div className="reviewer-business">{testimonial.business}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="social-proof">Serving Utah food entrepreneurs since 2018</div>
      </div>
    </section>
  )
}
