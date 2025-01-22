import "../styles/App.css";
import "../styles/Pod.css";

function Pod({ img, name }) {
  return (
    <div className="pod">
      <img
        className="pod_img"
        src={`/Personal-Website/skills/${img}.svg`}
        alt=""
      />
      <p className="small_font bold_font">{name}</p>
    </div>
  );
}

export default Pod;
