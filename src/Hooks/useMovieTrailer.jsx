import { addTrailerVideos } from "../Utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMoviesVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[1] : json.results[0];
    dispatch(addTrailerVideos(trailer));
  };
  useEffect(() => {
    getMoviesVideos();
  }, []);
};

export default useMovieTrailer;
