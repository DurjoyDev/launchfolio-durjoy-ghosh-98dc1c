"use client";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-sm font-mono mb-12 uppercase tracking-widest" style={{ color: "#e11d48" }}>[ Core Competencies ]</h2>
        <div className="flex flex-wrap justify-center gap-4">
          
        <span key={0} className="px-6 py-3 rounded-full border text-lg font-medium transition-colors hover:bg-white/5" style={{borderColor:"var(--color-border)", color:"var(--color-heading)"}}>
          Photography
        </span>\n
        <span key={1} className="px-6 py-3 rounded-full border text-lg font-medium transition-colors hover:bg-white/5" style={{borderColor:"var(--color-border)", color:"var(--color-heading)"}}>
          Teaching
        </span>\n
        <span key={2} className="px-6 py-3 rounded-full border text-lg font-medium transition-colors hover:bg-white/5" style={{borderColor:"var(--color-border)", color:"var(--color-heading)"}}>
          Leadership
        </span>\n
        <span key={3} className="px-6 py-3 rounded-full border text-lg font-medium transition-colors hover:bg-white/5" style={{borderColor:"var(--color-border)", color:"var(--color-heading)"}}>
          Writing
        </span>\n
        <span key={4} className="px-6 py-3 rounded-full border text-lg font-medium transition-colors hover:bg-white/5" style={{borderColor:"var(--color-border)", color:"var(--color-heading)"}}>
          Design
        </span>\n
        <span key={5} className="px-6 py-3 rounded-full border text-lg font-medium transition-colors hover:bg-white/5" style={{borderColor:"var(--color-border)", color:"var(--color-heading)"}}>
          Photo and Video Editing
        </span>
        </div>
      </div>
    </section>
  );
}