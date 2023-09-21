import { IoIosLogOut } from "react-icons/io";
import { UserAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Navbar = ({ onKeyDownHandler, query, setQuery, handleSearch }) => {
  const { logout } = UserAuth();
  const navigate = useNavigate();

  // To Logout
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <>
      <div className="navbar bg-primary">
        <div className="flex-1">
          <a className="normal-case text-xl text-white">IJA IMAGES📷</a>
        </div>
        <div className="contents md:flex items-center justify-between gap-8 ">
          <div className="form-control relative items-center">
            <input
              type="text"
              placeholder="Search"
              onKeyDown={onKeyDownHandler}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="input input-bordered w-40 md:w-80"
            />
          </div>

          <button
            onClick={() => handleSearch(query)}
            className="bg-gray-300 absolute top-[8px] right-[119px] md:right-[150px] p-4 text-black"
          >
            <BsSearch />
          </button>
          <button onClick={handleLogout} className="btn">
            Logout
            <IoIosLogOut />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
