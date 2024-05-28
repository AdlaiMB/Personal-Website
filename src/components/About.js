import '../styles/About.css';

function About() {
    return (
        <div className="about-container" id="About">
            <img className='img-about' src="./Personal-Website/about-image-website.png" alt="" />
            <div className='w-75'>
                <h2>About Me</h2>
                <p className='p-about mt-2'>Hey, my name is Adlai and I am currently studying Computer Science at the University of California, Riverside. I’m interested in all things computers (computer architecture, web dev, embedded systems), fútbol, movies, and comic books. I am currently looking for a software engineering internship.   </p>
            </div>
        </div>
    );
};

export default About;