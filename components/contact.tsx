"use client";

"use client";
export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{background:"radial-gradient(circle at 50% 50%, #e11d48, transparent 70%)"}} />
      <div className="max-w-4xl mx-auto relative z-10 p-12 md:p-16 rounded-[3rem] border backdrop-blur-xl shadow-2xl" style={{borderColor:"var(--color-border)", background:"var(--color-card-bg)"}}>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color:"var(--color-heading)"}}>Get In Touch</h2>
          <p className="text-lg" style={{color:"var(--color-body)"}}>Have a question or want to work together? Send me a message.</p>
        </div>
        
    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Form submission is a mockup on generated sites.'); }}>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2" style={{color:"var(--color-heading)"}}>Name</label>
          <input type="text" required className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 bg-transparent transition-all" style={{borderColor:"var(--color-border)", color:"var(--color-body)"}} placeholder="John Doe" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" style={{color:"var(--color-heading)"}}>Email</label>
          <input type="email" required className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 bg-transparent transition-all" style={{borderColor:"var(--color-border)", color:"var(--color-body)"}} placeholder="john@example.com" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2" style={{color:"var(--color-heading)"}}>Message</label>
        <textarea required rows={5} className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 bg-transparent transition-all resize-y" style={{borderColor:"var(--color-border)", color:"var(--color-body)"}} placeholder="Your message..."></textarea>
      </div>
      <button type="submit" className="w-full py-4 rounded-xl font-bold btn-primary transition-transform hover:scale-[1.02]">
        Send Message
      </button>
    </form>
  
      </div>
    </section>
  );
}