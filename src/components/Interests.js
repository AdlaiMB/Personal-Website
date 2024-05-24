import '../styles/Interests.css';

function Interests() {
    return (
        <div className="container center column interest-container">
            <h2>My Interests</h2>
            <div className="container row wrap spc-btwn mt-5 w-80">
                <div className='w-45'>
                    <h3>Embedded Systems</h3>
                    <p className="mt-1 w-80 p-card">Since I was a kid I’ve always been interested in how devices work such as RC Cars. This interest is what inspired be to take CS120B (Intro to Embedded Systems) and with the knowledge I gained, I was able to build a working Stacker Game. I’m also looking to explore more inside the filed by starting a RC car project.    </p>
                </div>
                <div className='w-45'>
                    <h3>Web Development</h3>
                    <p className='mt-1 w-80 p-card'>As a Computer Science major, I’m am naturally interested in building software. I enjoy it more when the software I build is visible and allows for others to experience it. This is what pushes me to learn more about the large Web Development field and how to build systems for large users bases with a clean design. </p>
                </div>
                <div className='w-45'>
                    <h3>Computer Architecture</h3>
                    <p className='mt-1 w-80 p-card'>As I have gone through my Computer Science Degree my interest in understanding the lower level working of computer has grown. Classes such as CS120A (Design Logic) and CS161(Design and Architecture of Computer Systems) have taught me the basics of how a computer works and I plan to further my understanding of such topics
through projects provided by Ben Eater.</p>
                </div>
            </div>
        </div>
    );
};

export default Interests;