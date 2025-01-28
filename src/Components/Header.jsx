import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO } from "../Utils/constants";
import { auth } from "../Utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUsers, removeUser } from "../Utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
  }, []);

  return (
    <div className="absolute px-34 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img className="w-52 w-fu" src={NETFLIX_LOGO} />
      {user && (
        <div className="">
          <img className="w-12 h-12" alt="UserIcon" src={user.photoURL} />
          <h3 className="font-bold text-white">
            {user?.displayName?.toUpperCase()}
          </h3>
          <button
            className="text-white font-bold cursor-pointer"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
