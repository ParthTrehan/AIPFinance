const testimonials = [
  {
    quote: "Anita is a thorough professional and she really listens to and understands your financial needs.",
    author: "Saad Sami",
  },
  {
    quote: "Great reliable service, quick and efficient, highly recommend it!!!",
    author: "Olesea Spicer",
  },
  {
    quote: "Most reliable and quick service for home loan assistance. Always ready to answer any questions any time. Highly recommended.",
    author: "Paresh Vekariya",
  },
];

export default function Testimonials(){
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div style={{textAlign:'center',marginBottom:36}}>
          <p style={{textTransform:'uppercase',letterSpacing:'.12em',fontSize:12,color:'var(--muted)',margin:0}}>What our clients say</p>
          <h2 style={{marginTop:8}}>Real results for <em>real Australians</em></h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map(({quote,author})=> (
            <article className="testimonial" key={author}>
              <div style={{color:'var(--color-accent)',fontWeight:700,letterSpacing:'.04em',fontSize:14}}>★★★★★</div>
              <blockquote style={{marginTop:12,flex:1,fontStyle:'italic'}}>{quote}</blockquote>
              <footer>
                <div style={{width:40,height:4,background:'var(--color-accent)',marginBottom:10}} />
                <div style={{fontWeight:600}}>{author}</div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
