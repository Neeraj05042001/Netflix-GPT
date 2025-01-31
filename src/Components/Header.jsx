import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO } from "../Utils/constants";
import { auth } from "../Utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUsers, removeUser } from "../Utils/userSlice";
import {toggleGptSearchButton} from "../Utils/gptSlice"
import DropDownLangChange from "./DropDownLangChange";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGPTSearchButton = () => {
    dispatch(toggleGptSearchButton());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUsers({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute px-34 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img className="w-52 " src={NETFLIX_LOGO} />
      {user && (
        <div className="flex p-2">
          <button
            className="text-white bg-purple-800  cursor-pointer px-4 py-1 mr-32 rounded-lg justify-center"
            onClick={handleGPTSearchButton}
          >
            {showGptSearch? "HomePage": "GPT Search" }
          </button>
          {showGptSearch && <DropDownLangChange />}
          <div className="-mr-28">
            <img className="w-12 h-12" alt="UserIcon" src={user.photoURL} />

            <button
              className="text-white font-bold cursor-pointer"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
