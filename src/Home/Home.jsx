import Sidebar from "../Components/Sidebar/Sidebar";
import PropTypes from "prop-types";
import "./Home.css";
import Feed from "../Components/Feed/Feed";
import { useState } from "react";

const Home = ({ sideBar }) => {

  const [category, setCategory] = useState(0);


  return (
    <div className="Home">
      <Sidebar sideBar={sideBar} category={category} setCategory={setCategory}/>
      <div className="Container">
        <Feed category={category}/>
      </div>
    </div>
  );
};

Home.propTypes = {
  sideBar: PropTypes.bool.isRequired,
};

export default Home;
