"use client";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{color:"var(--color-heading)"}}>Academic Background</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{background:"#e11d48"}} />
        </div>
        <div className="max-w-3xl mx-auto">
          
        <div key={0} className="relative pl-8 pb-12 border-l-2 last:pb-0" style={{ borderColor: "#e11d4850" }}>
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4" style={{ background: "var(--color-card-bg)", borderColor: "#e11d48" }} />
          <div className="p-8 rounded-2xl border shadow-sm hover:shadow-md transition-shadow" style={{ background: "var(--color-card-bg)", borderColor:"var(--color-border)" }}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <h3 className="text-xl font-bold" style={{color:"var(--color-heading)"}}>B.Sc in Computer Science and Engineering</h3>
              <span className="text-sm font-bold px-4 py-1.5 rounded-full whitespace-nowrap" style={{ background: "#e11d4815", color:"#e11d48" }}>
                2022 — 2026
              </span>
            </div>
            <p className="font-semibold text-lg mb-4" style={{ color: "#e11d48" }}>Jashore University of Science and Technology</p>
            <p className="leading-relaxed" style={{color:"var(--color-body)"}}>Lot of memories, lot of add's. lot of stories and lot of struggles....</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}