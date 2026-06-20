import profile from "../assets/profile.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <h4>Hello, I'm</h4>

        <h1>Najiya Nasreen V</h1>

        <h2>Full Stack Developer</h2>

        <p>
          B.Tech Information Technology graduate with a strong passion for
          Full Stack Development. Skilled in React.js, Python, Django and
          JavaScript, with hands-on experience building modern web
          applications and academic projects.
        </p>

        <div className="hero-buttons">

          <a href="/projects">
            <button className="resume-btn">
              My Projects
            </button>
          </a>

          <a href="/NajiyaNasreen_Resume.pdf" download>
            <button className="resume-btn">
              Download CV
            </button>
          </a>

        </div>

        <div className="social-icons">

          <a
            href="https://github.com/najiya2003"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/najiyanasreen-v"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:naajiya.nasreen@gmail.com">
            <FaEnvelope />
          </a>

        </div>

      </div>

      <div className="hero-right">
        <img
          src={profile}
          alt="Najiya Nasreen"
          className="profile-img"
        />
      </div>

    </section>
  );
}

export default Hero;