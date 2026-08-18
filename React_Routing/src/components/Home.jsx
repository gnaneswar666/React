import Navbar from "./Navbar";

function Home() {
  return (
    <section className="page home-page">

      <div className="container">

        <h1>Welcome to Our Website</h1>

        <p>
          This is the home page of our single-page React application.
        </p>

        <button className="primary-btn">
          Get Started
        </button>

      </div>
    </section>
  );
}

export default Home;