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
          <p className="lead">Melbourne mortgage broker</p>
          <h1>
            Simple home loans that save you money
          </h1>
          <p className="lead-body p-muted">
            AIP Finance compares 40+ lenders to find a lower rate for your home loan, refinance or investment — with no broker fee.
          </p>

          <div style={{display:'flex',gap:12,marginTop:20,flexWrap:'wrap'}}>
            <a className="btn btn-primary" href="#booking">Book a free consultation</a>
            <a className="btn btn-ghost" href="tel:+61498241696">Call +61 498 241 696</a>
          </div>

          <div className="mt-8">
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12}}>
              {stats.map((s)=> (
                <div key={s.label} style={{textAlign:'center'}}>
                  <div style={{fontSize:20,fontWeight:700,color:'var(--color-accent)'}}>{s.value}</div>
                  <div className="small p-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden>
          <img src="/AIPFinance/hero-illustration.svg" alt="Mortgage illustration" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
