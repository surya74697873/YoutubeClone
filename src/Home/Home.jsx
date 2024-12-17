import Sidebar from "../Components/Sidebar/Sidebar";
import PropTypes from "prop-types";
import "./Home.css";
import Feed from "../Components/Feed/Feed";

const Home = ({ sideBar }) => {
  return (
    <div className="Home">
      <Sidebar sideBar={sideBar} />
      <div className="Container">
        <Feed />
      </div>
    </div>
  );
};

Home.propTypes = {
  sideBar: PropTypes.bool.isRequired,
};

export default Home;
