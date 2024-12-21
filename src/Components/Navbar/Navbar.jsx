import menu_bar from "../../assets/menu.png";
import search_icon from "../../assets/search.png";
import mic from "../../assets/mic.png";
import upload_ico from "../../assets/plus.png";
import user_icon from "../../assets/user.jpg";
import notify_icon from "../../assets/notification.png";
import youtube_icon from "../../assets/youtube.png";
import "./Navbar.css";
import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"

const Navbar = ({ setSideBar }) => {
  const navigate = useNavigate()
  
  function reDirectHomePage(){
    navigate("/")
  }
  return (
    <div className="Navbar">
      <div className="Left">
        <div className="Menubar" onClick={() => setSideBar(prev => !prev)}>
          <img src={menu_bar} alt="Menu bar" />
        </div>
        <div className="Youtube_Title" onClick={reDirectHomePage}>
          <img src={youtube_icon} alt="youtube icon" />
          <p>YouTube</p>
        </div>
      </div>

      <div className="Middle">
        <div className="Search_bar">
          <input type="text" placeholder="Search" />
          <img src={search_icon} alt="Search Bar" />
        </div>
        <div className="Mic">
          <img src={mic} alt="Microphone" />
        </div>
      </div>

      <div className="Right">
        <div className="Upload">
          <img src={upload_ico} alt="Upload Icon" />
          <p>Create</p>
        </div>

        <div className="Notification">
          <img src={notify_icon} alt="Notification" />
        </div>
        <div className="User_logo">
          <img src={user_icon} alt="User Image" />
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  setSideBar : PropTypes.func.isRequired
}
export default Navbar;
