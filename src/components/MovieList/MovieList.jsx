import Fire from "../../assets/fire.png";
import "./MovieList.css";
import MovieCard from "./MovieCard";

const MovieList = ({ type, title, emoji }) => {
  const API_URL = `https://api.themoviedb.org/3/movie/${type}?api_key=01dbb14b064ba19063a67ac56363232d`;

  return (
    <section className="movie-list">
      <header className="align-center movie-list-header">
        <h2 className="align-center movie-list-heading">
          {title}{" "}
          <img src={emoji} alt={`${emoji}-png`} className="navbar-emojis" />
        </h2>
        <div className="align-center movie-list-fs">
          <ul className="align-center movie-filter">
            <li className="movie-filter-item active">8+ Stars</li>
            <li className="movie-filter-item">7+ Stars</li>
            <li className="movie-filter-item">6+ Stars</li>
          </ul>

          <select name="" id="" className="movie-sorting">
            <option value="default"> Sortby</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>

          <select name="" id="" className="movie-sorting">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>
      <div className="movie-cards">
        <MovieCard />
      </div>
    </section>
  );
};

export default MovieList;
