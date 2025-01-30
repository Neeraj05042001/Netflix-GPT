import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../Utils/moviesSlice";

const useTopRated = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTopRated();
  }, []);

  const getTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json =await data.json();
    dispatch(addTopRatedMovies(json.results));
    console.log(json);
  };
};

export default useTopRated;
