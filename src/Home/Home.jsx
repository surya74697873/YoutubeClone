import Sidebar from '../Components/Sidebar/Sidebar';
import PropTypes from "prop-types"
import './Home.css'

const Home = ({sideBar}) => {
  return (
    <div className="Home">
          <Sidebar sideBar={sideBar} />
    </div>
  )
}

Home.propTypes = {
  sideBar : PropTypes.bool.isRequired,
}

export default Home;