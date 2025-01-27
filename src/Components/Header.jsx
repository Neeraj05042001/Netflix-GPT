import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO } from "../Utils/constants";
import { auth } from "../Utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute px-34 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img className="w-52 w-fu" src={NETFLIX_LOGO} />
      {user &&  (
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
