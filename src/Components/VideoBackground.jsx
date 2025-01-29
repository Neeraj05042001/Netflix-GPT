import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackGround = ({ movieId }) => {
  const trailerVideos = useSelector((store) => store.movies?.trailerVideos);
  useMovieTrailer(movieId);
  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideos?.key +
          "?si=DALBcb23_NoG3cxs&autoplay=1&mute=1&playsinline=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;  fullscreen"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
