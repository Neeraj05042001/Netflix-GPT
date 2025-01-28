import { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/moviesSlice";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <h1>Browse</h1>
    </div>
  );
};
export default Browse;
