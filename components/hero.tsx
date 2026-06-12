"use client";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute top-20 right-20 w-64 h-64 border border-white/5 rounded-full" />
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-12 items-center w-full">
        <div className="md:col-span-3 anim-fadeUp">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-px" style={{background:"#e11d48"}} />
            <span className="text-sm font-medium uppercase tracking-widest" style={{color:"#e11d48"}}>Photographer</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tight" style={{color:"var(--color-heading)"}}>
            Durjoy
            <br />
            <span style={{WebkitTextStroke:"2px var(--color-heading)", color:"transparent"}}>Ghosh</span>
          </h1>
          <p className="text-xl leading-relaxed mb-10 max-w-xl" style={{color:"var(--color-text-muted)"}}>With a deep passion for visual storytelling, I specialize in creating photographs that capture the essence of people, places, and moments. I approach every project with creativity, attention to detail, and a commitment to excellence. My photography style blends natural emotion with artistic composition, resulting in images that are both impactful and memorable. Through every frame, I aim to create a connection that allows viewers to experience the story behind the photograph.</p>
          <div className="flex gap-4 flex-wrap">
            <a href="#gallery" className="group px-8 py-4 rounded-2xl font-semibold btn-primary transition-all hover:-translate-y-1 shadow-lg">
              Explore My Portfolio ↗
            </a>
          </div>
        </div>
        <div className="md:col-span-2 flex justify-center">
          <div className="w-80 h-80 rounded-3xl overflow-hidden border-4 flex-shrink-0" style={{borderColor:"var(--color-primary)"}}>
          <img src="https://res.cloudinary.com/des0whrgl/image/upload/v1779988813/launchfolio/user-pic/ejegjdbi2vrt5e0o9gml.png" alt="Durjoy Ghosh" className="w-full h-full object-cover" />
        </div>
        </div>
      </div>
    </section>
  );
}