export default function CTABanner(){
  return (
    <section style={{background:'linear-gradient(90deg,var(--neutral-100),#fff)',padding:'64px 0'}}>
      <div className="container card text-center">
        <p style={{textTransform:'uppercase',letterSpacing:'0.12em',fontSize:12,color:'var(--color-accent)',margin:0}}>Free Consultation</p>
        <h2 style={{marginTop:8}}>Find a better <em>home loan</em> — at no cost to you.</h2>
        <p className="p-muted" style={{maxWidth:720,margin:'8px auto 18px'}}>Whether you're buying, refinancing, or investing — get a free, no-obligation consultation and tailored loan comparison from our Melbourne broker.</p>
        <div style={{display:'flex',gap:12,justifyContent:'center',marginTop:12}}>
          <a className="btn btn-primary" href="#booking">Book your free consultation</a>
          <a className="btn btn-ghost" href="tel:+61498241696">Call +61 498 241 696</a>
        </div>
      </div>
    </section>
  );
}
