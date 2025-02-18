import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../Utils/moviesSlice";
import { API_OPTIONS } from "../Utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getPopularMovies();
  }, []);
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };
};

export default usePopularMovies;
