import "./contact.css";

function Contact() {
  return (
    <div>
      <header>
        <h1>Contact Me</h1>
        <p>I'd love to hear from you! Whether you have a question, feedback, or just want to connect, feel free to reach out.</p>
      </header>
      <main>
        <section className="contact-info">
          <div className="contact-item">
            <h2>Email</h2>
            <p><a href="mailto:youremail@example.com"><i className="fas fa-envelope"></i> imranbasic67@gmail.com</a></p>
          </div>
          <div className="contact-item">
            <h2>Location</h2>
            <p><i className="fas fa-map-marker-alt"></i> Sarajevo</p>
          </div>
          <div className="contact-item">
            <h2>Phone</h2>
            <p><a href="tel:+387 61 918 195"><i className="fas fa-phone"></i> +387 61 918 195</a></p>
          </div>
          <div className="contact-item">
            <h2>GitHub</h2>
            <p><a href="https://github.com/bejziq" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> github.com/bejziq</a></p>
          </div>
          <div className="contact-item">
            <h2>LinkedIn</h2>
            <p><a href="https://www.linkedin.com/in/imran-basic-15b082225/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> Imran Basic LinkedIn</a></p>
          </div>
        </section>
      </main>
    </div>
  );
}
export default Contact;