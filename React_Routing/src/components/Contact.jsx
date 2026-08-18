function Contact() {
  return (
    <section className="page contact-page">
      <div className="container">

        <h1>Contact Us</h1>

        <form className="contact-form">

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              rows="5"
              placeholder="Enter your message"
            />
          </div>

          <button type="submit" className="primary-btn">
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;