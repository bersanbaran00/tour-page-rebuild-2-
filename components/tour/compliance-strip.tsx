// New component: Compliance trust strip - brings legitimacy messaging higher on page
export function ComplianceStrip() {
  return (
    <section className="bg-[#f0f4ff] border-y border-[#e3eeff] py-6">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center">
          <div className="flex items-center gap-3">
            <span className="text-2xl">✓</span>
            <span className="text-[#2b468d] font-semibold">Health Department Approved</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">✓</span>
            <span className="text-[#2b468d] font-semibold">Passes All Inspections</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">✓</span>
            <span className="text-[#2b468d] font-semibold">Operating Since 2018</span>
          </div>
        </div>
      </div>
    </section>
  )
}
