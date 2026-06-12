"use client";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{color:"var(--color-heading)"}}>Gallery</h2>
          <div className="w-24 h-1 mx-auto" style={{background:"#e11d48"}} />
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          
    <div key={0} className="break-inside-avoid mb-6 rounded-2xl overflow-hidden border group relative shadow-lg" style={{borderColor:"var(--color-border)"}}>
      <img src="https://res.cloudinary.com/des0whrgl/image/upload/v1780092365/launchfolio/user-pic/xe1hpijfpl0kmx9ax1hp.jpg" alt="This is my cat Pookie, I love her very much. She is so cute." className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-white text-lg font-medium">This is my cat Pookie, I love her very much. She is so cute.</p>
      </div>
    </div>\n
    <div key={1} className="break-inside-avoid mb-6 rounded-2xl overflow-hidden border group relative shadow-lg" style={{borderColor:"var(--color-border)"}}>
      <img src="https://res.cloudinary.com/des0whrgl/image/upload/v1780092434/launchfolio/user-pic/irusnwputmnsemv1mjtc.jpg" alt="One of my adorable cat, She is so beautiful. I always love her." className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-white text-lg font-medium">One of my adorable cat, She is so beautiful. I always love her.</p>
      </div>
    </div>\n
    <div key={2} className="break-inside-avoid mb-6 rounded-2xl overflow-hidden border group relative shadow-lg" style={{borderColor:"var(--color-border)"}}>
      <img src="https://res.cloudinary.com/des0whrgl/image/upload/v1780347390/launchfolio/user-pic/ho6lz50273gdocab2fkc.png" alt="Me - Durjoy Ghosh. I don\\'t know how I am, but sometimes I thought that I am very kind person." className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-white text-lg font-medium">Me - Durjoy Ghosh. I don\\'t know how I am, but sometimes I thought that I am very kind person.</p>
      </div>
    </div>\n
    <div key={3} className="break-inside-avoid mb-6 rounded-2xl overflow-hidden border group relative shadow-lg" style={{borderColor:"var(--color-border)"}}>
      <img src="https://res.cloudinary.com/des0whrgl/image/upload/v1780349579/launchfolio/user-pic/imaxv35do9zlhqcxbarw.png" alt="My university, Jashore University of Science and Technology (JUST)." className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-white text-lg font-medium">My university, Jashore University of Science and Technology (JUST).</p>
      </div>
    </div>
        </div>
      </div>
    </section>
  );
}