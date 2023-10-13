export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">ANUSHKA MUKHERJEE</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer &
            <br />
            AI/ML Researcher
          </h1>
          <p className="hero--section-description">
            Pre-final year college student 
            <br /> Loves to make her ideas turn into reality
          </p>
        </div>
          <p>
            <h3>
          Get to know me!
          </h3>
          </p>
      </div>
      <div className="hero--section--img">
        <img src="./img/homepage.jpeg" alt="Hero Section" />
      </div>
    </section>
  );
}
