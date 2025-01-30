import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies)
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-26 relative z-20 pl-12">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
          <MovieList title={"Thriller"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Comedy"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Disney"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
