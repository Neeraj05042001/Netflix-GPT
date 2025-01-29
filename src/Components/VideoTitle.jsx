const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute opacity-85 text-white bg-gradient-to-r from-black  ">
      <h1 className="font-bold text-6xl w-1/4">{title}</h1>
      <p className="py-6 text-lg w-1/4 ">{overview}</p>
      <div className="mt-6">
        <button className="bg-white text-black px-12 py-3 rounded hover:opacity-75 ">
          ▶️ Play
        </button>
        <button className="bg-gray-500 px-12 py-3 rounded text-white ml-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
