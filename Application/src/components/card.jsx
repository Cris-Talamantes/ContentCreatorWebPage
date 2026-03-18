import { useNavigate } from "react-router-dom";
import "../css/card.css";


function Card({ id, name, url, description, imageURL }) {
  const navigate = useNavigate();


  return (
    <article
      className="creator-card"
      style={{
        backgroundImage: `url(${imageURL})`,
      }}
    >
      {/* OVERLAY CONTENT */}
      <div className="creator-overlay">


        {}
        <div className="creator-top-icons">
          <button
            className="icon-btn"
            onClick={() => navigate(`/view/${id}`)}
          >
          I
          </button>


          <button
            className="icon-btn"
            onClick={() => navigate(`/edit/${id}`)}
          >
            E
          </button>
        </div>


        {/* BOTTOM CONTENT */}
        <div className="creator-content">
          <h2 className="creator-name">{name}</h2>


          


          <p className="creator-description">{description}</p>
        </div>


      </div>
    </article>
  );
}


export default Card;

