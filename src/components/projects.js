function Projects() {
  return (
    <section className="section" id="projects">
      <h2>Projects</h2>

      <div className="project-card">
        <h3>GEMINO - AI Chatbot</h3>

        <p>
          Developed an AI-powered chatbot using React.js and
          Firebase with interactive conversations and real-time
          responses.
        </p>
      </div>

      <div className="project-card">
        <h3>Counterfeit Medicine Detection System</h3>

        <p>
          Blockchain-based medicine verification system using
          Ethereum smart contracts and QR code technology to
          identify counterfeit medicines.
        </p>
      </div>

       <div className="project-card">
        <h3>Glowora – E-Commerce Website</h3>

        <p>
         Built a Django-based e-commerce platform with user authentication, product management, shopping cart, and order processing features
        </p>
      </div>
    </section>
  );
}

export default Projects;