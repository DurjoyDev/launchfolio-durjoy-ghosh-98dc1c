"use client";

export default function Footer() {
  return (
    <footer className="py-12 px-6 text-center border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <p className="text-2xl font-bold mb-4" style={{color:"var(--color-heading)"}}>Durjoy<span style={{color:"#e11d48"}}>.</span></p>
        <div className="flex flex-wrap gap-6 justify-center mb-8">
          <a href="https://x.com/Durjoy_22" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"/></svg><span>X</span></a>
            <a href="https://www.tarinprosadghosh.me/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m13.73635 5.85251 4.00467-4.11665 2.3248 2.3808-4.20064 4.00466h5.9085v3.30473h-5.9365l4.22865 4.10766-2.3248 2.3338L12.0005 12.099l-5.74052 5.76852-2.3248-2.3248 4.22864-4.10766h-5.9375V8.12132h5.9085L3.93417 4.11666l2.3248-2.3808 4.00468 4.11665V0h3.4727zm-3.4727 10.30614h3.4727V24h-3.4727z"/></svg><span>Website</span></a>
            <a href="https://www.facebook.com/durjoy.ghosh.56" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg><span>Facebook</span></a>
            <a href="https://www.linkedin.com/in/durjoy-ghosh-just" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.476-.9 1.636-1.85 3.366-1.85 3.6 0 4.267 2.368 4.267 5.455v6.286zM5.337 7.433A2.065 2.065 0 1 1 5.337 3.3a2.065 2.065 0 0 1 0 4.133zM6.882 20.452H3.79V9h3.092v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0h.003z"/></svg><span>LinkedIn</span></a>
        </div>
        <div className="flex flex-wrap gap-6 justify-center mb-6">
          <a href="#hero" className="text-sm text-gray-500 hover:text-white transition-colors">Hero</a>
            <a href="#about" className="text-sm text-gray-500 hover:text-white transition-colors">About</a>
            <a href="#gallery" className="text-sm text-gray-500 hover:text-white transition-colors">Gallery</a>
            <a href="#skills" className="text-sm text-gray-500 hover:text-white transition-colors">Skills</a>
            <a href="#achievements" className="text-sm text-gray-500 hover:text-white transition-colors">Achievements</a>
        </div>
        <p className="text-xs text-gray-700">© 2026 Durjoy Ghosh. Built with <span style={{color:"#e11d48"}}>LaunchFolio</span>.</p>
      </div>
    </footer>
  );
}