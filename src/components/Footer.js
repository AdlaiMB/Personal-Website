import "../styles/App.css";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer_area">
      <div className="footer">
        <section className="top_section">
          <div className="personal_section">
            <p className="bold_font small_font black_text">
              Adlai Morales-Bravo
            </p>
            <p className="italic_font small_font black_text">
              Juana Inés de la Cruz-{" "}
              <q>No estudio para saber más, sino para ignorar menos.</q>
            </p>
          </div>
          <div className="links_section">
            <div>
              <p className="bold_font small_font black_text">Resources</p>
              <ul className="small_font links">
                <li>NavBar</li>
              </ul>
            </div>
            <div>
              <p className="bold_font small_font black_text">Sections</p>
              <ul className="small_font links">
                <li>
                  <a href="#Home">Home</a>
                </li>
                <li>
                  <a href="#About">Education</a>
                </li>
                <li>
                  <a href="#About">About Me</a>
                </li>
                <li>
                  <a href="#Skills">Skills</a>
                </li>
                <li>
                  <a href="#Projects">Projects</a>
                </li>
                <li>
                  <a href="#Future">Future</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="bottom_section row footer_row">
          <a
            href="https://www.linkedin.com/in/adlai-morales-bravo-95561221a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="footer_img"
              src="/Personal-Website/media/linkedin.svg"
              alt=""
            />
          </a>
          <a
            href="https://github.com/AdlaiMB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="footer_img"
              src="/Personal-Website/media/github.svg"
              alt=""
            />
          </a>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
