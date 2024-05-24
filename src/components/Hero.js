import '../styles/Hero.css';

function Hero() {
    return (
        <div className="hero-container row" id="Home">
            <div className='w-50'>
                <h1>Hi, I'm Adlai Morales-Bravo.</h1>
                <p className='p-hero mt-2'>A University of California Riverside Computer Science Undergraduate Student.</p>
            </div>
            <img className='img-hero' src="/personal-website-me.png" alt="" />
        </div>

    );
};

export default Hero;