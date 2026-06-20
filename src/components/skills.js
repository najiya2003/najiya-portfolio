function Skills() {
  return (
    <section className="section" id="skills">
      <h2>Technical Skills & Technologies</h2>
      <p className="skills-text">
  A collection of technologies, frameworks, and tools that I use to develop modern web applications.
</p>

      <div className="cards">

        <div className="card">
          <h3>Frontend</h3>
          <p>HTML5</p>
          <p>CSS3</p>
          <p>JavaScript</p>
          <p>React.js</p>
          <p>Bootstrap</p>
          <p>Responsive Design</p>
        </div>

        <div className="card">
          <h3>Backend</h3>
          <p>Python</p>
          <p>Django</p>
          <p>Java</p>
          <p>REST APIs</p>
        </div>

        <div className="card">
          <h3>Database</h3>
          <p>MySQL</p>
          <p>Firebase</p>
        </div>

        <div className="card">
          <h3>Tools</h3>
          <p>Git</p>
          <p>GitHub</p>
          <p>VS Code</p>
        </div>

      </div>
    </section>
  );
}

export default Skills;