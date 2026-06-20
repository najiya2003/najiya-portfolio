function Contact() {
  return (
    <section className="section">
      <h2>Contact</h2>

      <div className="contact-box">

        <p>
          <strong>Name:</strong> Najiya Nasreen V
        </p>

        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:naajiya.nasreen@gmail.com">
            naajiya.nasreen@gmail.com
          </a>
        </p>

        <p>
          <strong>Location:</strong> Malappuram, Kerala
        </p>

        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/najiyanasreen-v"
            target="_blank"
            rel="noreferrer"
          >
            View LinkedIn Profile
          </a>
        </p>

        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/najiya2003"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub Profile
          </a>
        </p>

      </div>
    </section>
  );
}

export default Contact;