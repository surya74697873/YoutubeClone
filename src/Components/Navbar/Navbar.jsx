import menu_bar from '../../assets/menu.png'
import search_icon from "../../assets/search.png"
import mic from "../../assets/mic.png"
import upload_ico from "../../assets/plus.png"
import user_icon from "../../assets/user.jpg"
import notify_icon from "../../assets/notification.png"
import youtube_icon from "../../assets/youtube.png"
import './Navbar.css'


const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Left">
        <div className="Menubar rcimg">
        <img src={menu_bar} alt="Menu bar" />
      </div>
      <div className="Youtube_Title rcimg">
        <img src={youtube_icon} alt="youtube icon" />
        <p>YouTupe</p>
      </div>
      </div>
      
      <div className="Middle">
        <div className="Search_bar rcimg">
          <input type="text" placeholder='Search'/>
        <img src={search_icon} alt="Search Bar" />
        </div>
        <div className="Mic rcimg">
          <img src={mic} alt="Microphone" />
        </div>
      </div>

      <div className="Right">
        <div className="Upload rcimg">
          <img src={upload_ico} alt="Upload Icon" />
          <p>Create</p>
        </div>
        
        <div className="Notification rcimg">
          <img src={notify_icon} alt="Notification" />
        </div>
        <div className="User_logo rcimg">
          <img src={user_icon} alt="User Image" />
        </div>
      </div>
    </div>
  )
}

export default Navbar