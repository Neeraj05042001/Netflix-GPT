import { useDispatch } from "react-redux";
import { changeLanguage } from "../Utils/configSlice";
import { SUPPORTED_LANGUAGES} from "../Utils/constants";

const DropDownLangChange = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div>
      <select className="p-2 m-2 bg-gray-900 text-white rounded" onChange={handleChange}>
        {SUPPORTED_LANGUAGES.map((lang) => (
          <option key={lang.identifier} value={lang.identifier}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDownLangChange;
