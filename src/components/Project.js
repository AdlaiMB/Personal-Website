import Card from './Card';
import '../styles/Projects.css';

function Projects() {
    return (
        <div className='project-container container column center' id="Projects">
            <h2>My Projects</h2>
            <div className='container column gap-2 center mt-4'>
                <Card title="MedAid" description="Cryptocurrency sentiment analysis on tweets. Users can see the overall sentiment (positive, negative or neutral) of different Cryptocurrencies based on what people are currently tweeting. Users can also see keywords and an average sentiment score. Stateless application that uses Elasticache and S3 on AWS. It also used EC2 and auto-scaling to manage demand." link="/card-img.webp"></Card>
                <Card title="OzDevs" description="A website for students in the University of California, Riverside Computer Science Department to apply for TA,ULA, and Reader positions." link="/card-img-2.webp"></Card>
                <Card title="Stacker Game" description="Stacker game written in Arduino that runs on a Arduino Uno. Includes a timer and buzzer for feedback to the player. Built using state machine 
design for all components.     " link="/card-img-3.webp"></Card>
            </div>
        </div>
    );
};

export default Projects;