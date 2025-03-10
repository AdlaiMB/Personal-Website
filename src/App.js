import "./styles/App.css";
import SlideTabs from "./components/SlideTabs";
import Pod from "./components/Pod";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <SlideTabs></SlideTabs>
      <div>
        <section className="main pt_section h-100" id="Home">
          <div className="text_column w-45 w-change">
            <h1>Hi, I'm Adlai Morales-Bravo</h1>
            <p>
              A University of California Riverside Computer Science graduate.
            </p>
            <div className="row main_row">
              <a
                href="https://www.linkedin.com/in/adlai-morales-bravo-95561221a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="main_img_icon"
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
                  className="main_img_icon"
                  src="/Personal-Website/media/github.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
          <img
            className="w-35 image"
            src="/Personal-Website/PersonalWebsite-Portrait.png"
            alt=""
          />
        </section>
        <section className="about pt_section p-m" id="About">
          <img
            className="w-35 image"
            src="/Personal-Website/PersonalWebsite-About-Education.png"
            alt=""
          />
          <div className="text_column_section w-45 w-change">
            <div className="text_column">
              <h1>Education</h1>
              <p>
                University of California, Riverside <br /> Bachelor of Science,
                Computer Science <br />
                Graduated : Fall 2024
              </p>
            </div>
            <div className="text_column">
              <h1>About Me</h1>
              <p>
                I recently graduated from the University of California,
                Riverside studying{" "}
                <span className="italic_font">Computer Science</span>. I’m
                interested in all things computers (computer architecture, web
                dev, embedded systems). Some of my other interests are fútbol,
                movies, and comic books. I am currently looking for a software
                engineering internship.
              </p>
            </div>
          </div>
        </section>
        <section className="skills p-m" id="Skills">
          <h1>Skills</h1>
          <div className="row skill_row">
            <Pod img="python" name="Python" />
            <Pod img="js" name="JavaScript" />
            <Pod img="html" name="HTML" />
            <Pod img="css" name="CSS" />
            <Pod img="node" name="Node.js" />
            <Pod img="arduino" name="Arduino" />
            <Pod img="mongo" name="MongoDB" />
            <Pod img="postgresql" name="PostgreSQL" />
            <Pod img="git" name="Git" />
          </div>
        </section>
        <section className="projects p-m" id="Projects">
          <h1>Projects</h1>
          <div className="row card_row_column">
            <Card
              title="MedAid | Android Mobile App"
              description="An Android mobile application where users can search, review, and recommend doctors and other medical experts in their area using Parse as its backend. Finalist at CodePath Nationals Fall 2021."
              link="https://github.com/DrSearch-Team/MedAid"
            />
            <Card
              title="UDP Server | UCR CS164"
              description="A UDP server with TCP-like behavior implemented in C++. A projected created in my UCR CS164 Computer Networks class to further my understanding of computer networks and how the transport layer works under the hood."
              link="https://github.com/"
            />
            <Card
              title="Amazon Storefront DB | UCR CS166"
              description="A database-driven application in Java for managing user accounts, stores, products, and orders. It allows users to create accounts, log in, and perform various actions based on their user type."
              link="https://github.com/deet5/Amazon-Storefront-DB"
            />
          </div>
        </section>
        <section className="future pt_section p-l" id="Future">
          <h1>Future</h1>
          <div className="row row_column_change seperate_text_column">
            <div className="w-45 text_column_section w-change">
              <div className="text_column">
                <h2>Embedded Systems</h2>
                <p>
                  Since I was a kid I’ve always been interested in how devices
                  work such as RC Cars. This interest is what inspired be to
                  take CS120B (Intro to Embedded Systems) and with the knowledge
                  I gained, I was able to build a working Stacker Game. I’m also
                  looking to explore more inside the field by starting a RC car
                  project.
                </p>
              </div>
              <div className="text_column">
                <h2>Computer Architecture</h2>
                <p>
                  As I have gone through my Computer Science Degree my interest
                  in understanding the lower level working of computer has
                  grown. Classes such as CS120A (Design Logic) and CS161(Design
                  and Architecture of Computer Systems) have taught me the
                  basics of how a computer works and I plan to further my
                  understanding of such topics through projects provided by Ben
                  Eater.
                </p>
              </div>
            </div>
            <div className="w-45 text_column_section w-change">
              <div className="text_column">
                <h2>Web Development</h2>
                <p>
                  As a Computer Science major, I am naturally interested in
                  building software. I enjoy it more when the software I build
                  is visible and allows for others to experience it. This is
                  what pushes me to learn more about the large Web Development
                  field and how to build systems for large users bases with a
                  clean design.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
