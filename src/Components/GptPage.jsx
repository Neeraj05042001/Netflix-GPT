import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptPage = () => {
  return (
    <div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
};

export default GptPage;
