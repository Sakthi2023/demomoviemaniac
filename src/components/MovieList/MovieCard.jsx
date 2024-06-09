import Star from "../../assets/star.png";
import "./MovieCard.css";

const MovieCard = () => {
  return (
    <a href="" target="_blank" className="movie-card">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3YKw6n-RDgqyFy69GSuuiue2qkkByXQLJLg&s"
        alt=""
        className="movie-poster"
      />
      <div className="movie-details">
        <h3 className="movie-name">Movie name</h3>
        <div className="movie-date-rate">
          <p>10/10/2022</p>
          <p className="movie-rating">
            8 +
            <img src={Star} alt="" className="card-emojis" />
          </p>
        </div>
        <p className="movie-des">Description</p>
      </div>
    </a>
  );
};

export default MovieCard;
