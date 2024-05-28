import Card from './Card';
import '../styles/Projects.css';

function Projects() {
    return (
        <div className='project-container container column center' id="Projects">
            <h2>My Projects</h2>
            <div className='container column gap-2 center mt-4'>
                <Card title="CryptoCrowd" description="Cryptocurrency sentiment analysis on tweets. Users can see the overall sentiment (positive, negative or neutral) of different Cryptocurrencies based on what people are currently tweeting. Users can also see keywords and an average sentiment score. Stateless application that uses Elasticache and S3 on AWS. It also used EC2 and auto-scaling to manage demand." link="/card-img.webp"></Card>
                <Card title="OzDevs" description="Reverse Job board for companies looking to hire developers in Australia. Filter by experience, location and keyboards. Companies can pay a monthly fee to be able to message developers on the site and view their information.

Live
"  link="/card-img-2.webp"></Card>
                <Card title="Euphorus" description="React application for viewing country happiness data collected from the World Happiness Report initiative. Users can filter by year, country and search limit. AG Grid and Chart.js were used to present the data." link="/card-img-3.webp"></Card>
            </div>
        </div>
    );
};

export default Projects;