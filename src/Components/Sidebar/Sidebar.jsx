import home from "../../assets/sidebar/home.png"
import gaming from "../../assets/sidebar/games.png"
import automobiles from "../../assets/sidebar/automobiles.png"
import sports from "../../assets/sidebar/sports.png"
import entertainment from "../../assets/sidebar/entertainment.png"
import tech from "../../assets/sidebar/technology.png"
import music from "../../assets/sidebar/music.png"
import blogs from "../../assets/sidebar/blog.png"
import news from "../../assets/sidebar/newspaper.png"

import pewdiepie from "../../assets/subscribers/pwediepie.jpg"
import a2d from "../../assets/subscribers/a2d.jpg"
import mincrafts from "../../assets/subscribers/5mincrafts.jpg"
import mrbeast from "../../assets/subscribers/mrbeast.jpg"
import justin from "../../assets/subscribers/justinbiber.jpg"

import './Sidebar.css'

import PropTypes from "prop-types"

const Sidebar = ({sideBar}) => {
  console.log(sideBar);
  
  return (
   <div className={`Sidebar ${sideBar ? 'Visible' : ''}`}>
    <div className="Options">
      <div className="Side-icons">
        <img src={home} alt="Home" /> <p>Home</p>
      </div>
      <div className="Side-icons">
        <img src={gaming} alt="Gaming" /> <p>Gaming</p>
      </div>
      <div className="Side-icons">
        <img src={automobiles} alt="Automobiles" /> <p>Automobiles</p>
      </div>
      <div className="Side-icons">
        <img src={sports} alt="Sports" /> <p>Sports</p>
      </div>
      <div className="Side-icons">
        <img src={entertainment} alt="Entertainment" /> <p>Entertainment</p>
      </div>
      <div className="Side-icons">
        <img src={tech} alt="Technology" /> <p>Techonology</p>
      </div>
      <div className="Side-icons">
        <img src={music} alt="Music" /> <p>Music</p>
      </div>
      <div className="Side-icons">
        <img src={blogs} alt="Blogs" /> <p>Blogs</p>
      </div>
      <div className="Side-icons">
        <img src={news} alt="News" /> <p>News</p>
      </div>
      <hr />
    </div>
    <div className="Subscribers">
      <p className="Subs_Title">SubScribers</p>
      <div className="Side-icons">
        <img src={pewdiepie} alt="PewDiePie" />
        <p>PewDiePie</p>
      </div>
      <div className="Side-icons">
        <img src={a2d} alt="A2D" />
        <p>A2D</p>
      </div>
      <div className="Side-icons">
        <img src={justin} alt="Justin Biber" />
        <p>Justin Biber</p>
      </div>
      <div className="Side-icons">
        <img src={mrbeast} alt="MrBeast" />
        <p>MrBeast</p>
      </div>
      <div className="Side-icons">
        <img src={mincrafts} alt="5 Minutes Crafts" />
        <p>5 Minutes Crafts</p>
      </div>
    </div>
   </div>
  )
}

Sidebar.propTypes = {
  sideBar : PropTypes.bool.isRequired,
}

export default Sidebar