const stats = [
  { value: "40+", label: "Lenders compared" },
  { value: "$0", label: "Cost to you" },
  { value: "5★", label: "Client rating" },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="lead" style={{color:'var(--color-accent)'}}>Melbourne mortgage broker</p>
          <h1 style={{color:'#fff'}}>
            Simple home loans that save you money
          </h1>
          <p className="lead-body" style={{color:'rgba(255,255,255,0.8)'}}>
            AIP Finance compares 40+ lenders to find a lower rate for your home loan, refinance or investment — with no broker fee.
          </p>

          <div style={{marginTop:24}}>
            <a className="btn btn-primary" href="#booking">Book a free consultation</a>
          </div>

          <div className="mt-8">
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12}}>
              {stats.map((s)=> (
                <div key={s.label} style={{textAlign:'center'}}>
                  <div style={{fontSize:20,fontWeight:700,color:'var(--color-accent)'}}>{s.value}</div>
                  <div className="small" style={{color:'rgba(255,255,255,0.7)'}}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden>
          <svg width="100%" height="auto" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="600" rx="24" fill="rgba(255,255,255,0.1)" />
            <g transform="translate(50,50)">
              <rect x="0" y="0" width="500" height="280" rx="16" fill="#fff" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
              <rect x="30" y="30" width="440" height="60" rx="8" fill="#00B894" opacity="0.1" />
              <circle cx="260" cy="170" r="40" fill="#0F2B5B" opacity="0.1" />
              <rect x="30" y="330" width="500" height="100" rx="12" fill="rgba(255,255,255,0.05)" />
              <text x="260" y="385" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="16" fontFamily="Inter">40+ lenders comparison dashboard</text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
