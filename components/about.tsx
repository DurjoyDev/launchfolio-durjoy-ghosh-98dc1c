"use client";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="p-10 md:p-16 rounded-3xl border text-center shadow-2xl relative overflow-hidden" style={{ borderColor: "var(--color-border)", background: "var(--color-card-bg)" }}>
          <div className="absolute top-0 left-0 w-full h-2" style={{background: "linear-gradient(90deg, #e11d48, transparent)"}} />
          <span className="text-sm font-semibold tracking-widest uppercase mb-4 block" style={{ color: "#e11d48" }}>Biography</span>
          <h2 className="text-4xl font-bold mb-8" style={{color:"var(--color-heading)"}}>Hello, I'm Durjoy Ghosh</h2>
          <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto" style={{color:"var(--color-body)"}}>With a deep passion for visual storytelling, I specialize in creating photographs that capture the essence of people, places, and moments. I approach every project with creativity, attention to detail, and a commitment to excellence. My photography style blends natural emotion with artistic composition, resulting in images that are both impactful and memorable. Through every frame, I aim to create a connection that allows viewers to experience the story behind the photograph.</p>
          <div className="flex flex-wrap justify-center gap-8 pt-8 border-t" style={{borderColor:"var(--color-border)"}}>
            <div className="text-center"><p className="text-xs uppercase tracking-wider mb-1" style={{color:"var(--color-text-muted)"}}>Location</p><p className="font-medium" style={{color:"var(--color-heading)"}}>Dhaka, Bangladesh</p></div>
            <div className="text-center"><p className="text-xs uppercase tracking-wider mb-1" style={{color:"var(--color-text-muted)"}}>Email</p><a href="mailto:200120.cse@student.just.edu.bd" className="font-medium hover:underline" style={{color:"var(--color-heading)"}}>200120.cse@student.just.edu.bd</a></div>
          </div>
        </div>
      </div>
    </section>
  );
}