import '../styles/Card.css';

function Card({title, description, link}) {
    return (
        <div className="card-container">
            <div className="w-40 container column gap-4">
                <div className="container column gap-1_5">
                    <p className="font-medium p-card-title">{title}</p>
                    <p className="font-medium p-card">Made with:</p>
                    <p className="p-card">{description}</p>
                </div>
                <a className="button" href="#Home">Link</a>
            </div>
            <img className="card-img" src={link} alt=""/>
        </div>
    );
};

export default Card;