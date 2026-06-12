"use client";

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 px-6">
      <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-16">
        <div className="md:col-span-2">
          <h2 className="text-5xl font-black mb-6 sticky top-32" style={{color:"var(--color-heading)"}}>Awards & Honors.</h2>
        </div>
        <div className="md:col-span-3">
          
        <div key={0} className="flex gap-6 mb-10 last:mb-0 items-start">
          <div className="w-16 h-16 rounded-full flex shrink-0 items-center justify-center text-3xl shadow-lg border-2" style={{ background: "var(--color-card-bg)", borderColor: "#e11d48" }}>🏆</div>
          <div>
            <h3 className="text-2xl font-bold mb-2" style={{color:"var(--color-heading)"}}>SOLVIO AI Hackathon 2025 <span className="text-sm font-mono opacity-50 ml-2">2025</span></h3>
            <p className="text-lg leading-relaxed" style={{color:"var(--color-body)"}}>Secured Top 10 position in the final round.</p>
          </div>
        </div>\n
        <div key={1} className="flex gap-6 mb-10 last:mb-0 items-start">
          <div className="w-16 h-16 rounded-full flex shrink-0 items-center justify-center text-3xl shadow-lg border-2" style={{ background: "var(--color-card-bg)", borderColor: "#e11d48" }}>🏆</div>
          <div>
            <h3 className="text-2xl font-bold mb-2" style={{color:"var(--color-heading)"}}>HackTheAI by Green University of Bangladesh <span className="text-sm font-mono opacity-50 ml-2">2025</span></h3>
            <p className="text-lg leading-relaxed" style={{color:"var(--color-body)"}}>Ranked 41st out of 242 teams in the preliminary stage</p>
          </div>
        </div>\n
        <div key={2} className="flex gap-6 mb-10 last:mb-0 items-start">
          <div className="w-16 h-16 rounded-full flex shrink-0 items-center justify-center text-3xl shadow-lg border-2" style={{ background: "var(--color-card-bg)", borderColor: "#e11d48" }}>🏆</div>
          <div>
            <h3 className="text-2xl font-bold mb-2" style={{color:"var(--color-heading)"}}>BUP CSE TECH CARNIVAL 2025 <span className="text-sm font-mono opacity-50 ml-2">2025</span></h3>
            <p className="text-lg leading-relaxed" style={{color:"var(--color-body)"}}>Secured top 20 position out of 80 teams</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}