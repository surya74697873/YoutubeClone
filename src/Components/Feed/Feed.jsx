import "./Feed.css";
import image from "../../assets/thumbnail1.png";
import chnl_logo from "../../assets/user.jpg";
import { Link } from "react-router-dom";

const Feed = () => {
  return (
    <div className="Feed">
         <Link to="/video/53/2233" className="Collection">
        <div className="Video_Thumbnail">
          <img src={image} alt="" />
        </div>
        <div className="Video_Desc">
          <div className="Channel_logo">
            <img src={chnl_logo} alt="Channel Logo" />
          </div>
          <div className="Channel_desc">
            <h2>
              Best Channel to learn coding that help you to be a web developer
            </h2>
            <h3>Tamil Nadu</h3>
            <p>1M views &bull; 10000 years ago</p>
          </div>
        </div>
      </Link>
      <div className="Collection">
        <div className="Video_Thumbnail">
          <img src={image} alt="" />
        </div>
        <div className="Video_Desc">
          <div className="Channel_logo">
            <img src={chnl_logo} alt="Channel Logo" />
          </div>
          <div className="Channel_desc">
            <h2>
              Best Channel to learn coding that help you to be a web developer
            </h2>
            <h3>Tamil Nadu</h3>
            <p>1M views &bull; 10000 years ago</p>
          </div>
        </div>
      </div>
      <div className="Collection">
        <div className="Video_Thumbnail">
          <img src={image} alt="" />
        </div>
        <div className="Video_Desc">
          <div className="Channel_logo">
            <img src={chnl_logo} alt="Channel Logo" />
          </div>
          <div className="Channel_desc">
            <h2>
              Best Channel to learn coding that help you to be a web developer
            </h2>
            <h3>Tamil Nadu</h3>
            <p>1M views &bull; 10000 years ago</p>
          </div>
        </div>
      </div>
      <div className="Collection">
        <div className="Video_Thumbnail">
          <img src={image} alt="" />
        </div>
        <div className="Video_Desc">
          <div className="Channel_logo">
            <img src={chnl_logo} alt="Channel Logo" />
          </div>
          <div className="Channel_desc">
            <h2>
              Best Channel to learn coding that help you to be a web developer
            </h2>
            <h3>Tamil Nadu</h3>
            <p>1M views &bull; 10000 years ago</p>
          </div>
        </div>
      </div>
      <div className="Collection">
        <div className="Video_Thumbnail">
          <img src={image} alt="" />
        </div>
        <div className="Video_Desc">
          <div className="Channel_logo">
            <img src={chnl_logo} alt="Channel Logo" />
          </div>
          <div className="Channel_desc">
            <h2>
              Best Channel to learn coding that help you to be a web developer
            </h2>
            <h3>Tamil Nadu</h3>
            <p>1M views &bull; 10000 years ago</p>
          </div>
        </div>
      </div>
      <div className="Collection">
        <div className="Video_Thumbnail">
          <img src={image} alt="" />
        </div>
        <div className="Video_Desc">
          <div className="Channel_logo">
            <img src={chnl_logo} alt="Channel Logo" />
          </div>
          <div className="Channel_desc">
            <h2>
              Best Channel to learn coding that help you to be a web developer
            </h2>
            <h3>Tamil Nadu</h3>
            <p>1M views &bull; 10000 years ago</p>
          </div>
        </div>
      </div>
      <div className="Collection">
        <div className="Video_Thumbnail">
          <img src={image} alt="" />
        </div>
        <div className="Video_Desc">
          <div className="Channel_logo">
            <img src={chnl_logo} alt="Channel Logo" />
          </div>
          <div className="Channel_desc">
            <h2>
              Best Channel to learn coding that help you to be a web developer
            </h2>
            <h3>Tamil Nadu</h3>
            <p>1M views &bull; 10000 years ago</p>
          </div>
        </div>
      </div>
      <div className="Collection">
        <div className="Video_Thumbnail">
          <img src={image} alt="" />
        </div>
        <div className="Video_Desc">
          <div className="Channel_logo">
            <img src={chnl_logo} alt="Channel Logo" />
          </div>
          <div className="Channel_desc">
            <h2>
              Best Channel to learn coding that help you to be a web developer
            </h2>
            <h3>Tamil Nadu</h3>
            <p>1M views &bull; 10000 years ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
