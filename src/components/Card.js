import "../styles/App.css";
import "../styles/Card.css";

function Card({ title, description, link }) {
  return (
    <div className="card_background">
      <div className="card">
        <div className="card_content">
          <p className="bold_font black_text">{title}</p>
          <p className="small_font black_text description">{description}</p>
          <a
            className="button bold_font small_font"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Link
            <img src="/Personal-Website/icons/button_icon.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
