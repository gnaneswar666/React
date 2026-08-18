import Navbar from "./Navbar";

function About() {
  return (
    <section className="page about-page">
   
      <div className="container">

        <h1>About Us</h1>

        <p>
          We build modern and user-friendly web applications
          using React and modern technologies.
        </p>

        <div className="about-grid">
          <div className="info-card">
            <h3>Our Mission</h3>
            <p>
              To create simple, useful and beautiful digital experiences.
            </p>
          </div>

          <div className="info-card">
            <h3>Our Vision</h3>
            <p>
              To make technology accessible and easy to use.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;