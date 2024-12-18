import "./PlayVideo.css";
import video1 from "../../assets/videos_subs/video.mp4";
import user from "../../assets/user.jpg";
import user_profile from "../../assets/videos_subs/profile.png"
import like from "../../assets/videos_subs/like.png";
import dislike from "../../assets/videos_subs/dislike.png";
import share from "../../assets/videos_subs/share.png";
import list from "../../assets/videos_subs/playlist.png";

const PlayVideo = () => {
  return (
    <div className="PlayVideo">
      <video src={video1} controls autoPlay muted></video>
      <h2>Best Channel to learn coding that help you to be a web developer</h2>
      <div className="ChannelDesc">
        <div className="Channel">
          <div className="Channel_Profile">
            <img src={user} alt=""></img>
            <div className="Channel_Subscribers">
              <h2>Tamil Nadu</h2>
              <p>1M Subscribers</p>
            </div>
            <button>Subscribe</button>
          </div>
          <div className="Others">
            <div className="LikeandDislike">
              <div className="Like">
                  <img src={like} alt="Like" /> <span>67</span>
              </div>
              <div className="Dislike">
                <img src={dislike} alt="Dislike" />
              </div>
            </div>
            <div className="Share">
                 <img src={share} alt="Share" />
                 <span>Share</span>
            </div>
            <div className="Add_PlayList">
              <img src={list} alt="Add PlayList" />
            </div>
          </div>
        </div>
        <hr />
        <div className="Video_Description">
          <p>Subscribe to Our TamilNadu Channel</p>
          TamilNadu is born before 10000 Years ago
        </div>
      </div>
      <hr />
      <div className="Comments">
        <h2>Comments</h2>
        <div className="Comment">
          <div className="User_Profile">
            <img src={user_profile} alt="" />
          </div>
          <div className="Comment_Text">
            <h2>@TamilNadu</h2>
            <p>Bruce running towards that dust and chaos shows how mentally strong he is</p>
            <div className="buttons">
              <button><img src={like} alt="Like" /></button>
              <button><img src={dislike} alt="DisLike" /> </button>
            </div>
          </div>
        </div>
        <div className="Comment">
          <div className="User_Profile">
            <img src={user_profile} alt="" />
          </div>
          <div className="Comment_Text">
            <h2>@TamilNadu</h2>
            <p>Bruce running towards that dust and chaos shows how mentally strong he is</p>
            <div className="buttons">
              <button><img src={like} alt="Like" /></button>
              <button><img src={dislike} alt="DisLike" /> </button>
            </div>
          </div>
        </div>
        <div className="Comment">
          <div className="User_Profile">
            <img src={user_profile} alt="" />
          </div>
          <div className="Comment_Text">
            <h2>@TamilNadu</h2>
            <p>Bruce running towards that dust and chaos shows how mentally strong he is</p>
            <div className="buttons">
              <button><img src={like} alt="Like" /></button>
              <button><img src={dislike} alt="DisLike" /> </button>
            </div>
          </div>
        </div>
        <div className="Comment">
          <div className="User_Profile">
            <img src={user_profile} alt="" />
          </div>
          <div className="Comment_Text">
            <h2>@TamilNadu</h2>
            <p>Bruce running towards that dust and chaos shows how mentally strong he is</p>
            <div className="buttons">
              <button><img src={like} alt="Like" /></button>
              <button><img src={dislike} alt="DisLike" /> </button>
            </div>
          </div>
        </div>
        <div className="Comment">
          <div className="User_Profile">
            <img src={user_profile} alt="" />
          </div>
          <div className="Comment_Text">
            <h2>@TamilNadu</h2>
            <p>Bruce running towards that dust and chaos shows how mentally strong he is</p>
            <div className="buttons">
              <button><img src={like} alt="Like" /></button>
              <button><img src={dislike} alt="DisLike" /> </button>
            </div>
          </div>
        </div>
        <div className="Comment">
          <div className="User_Profile">
            <img src={user_profile} alt="" />
          </div>
          <div className="Comment_Text">
            <h2>@TamilNadu</h2>
            <p>Bruce running towards that dust and chaos shows how mentally strong he is</p>
            <div className="buttons">
              <button><img src={like} alt="Like" /></button>
              <button><img src={dislike} alt="DisLike" /> </button>
            </div>
          </div>
        </div>
        <div className="Comment">
          <div className="User_Profile">
            <img src={user_profile} alt="" />
          </div>
          <div className="Comment_Text">
            <h2>@TamilNadu</h2>
            <p>Bruce running towards that dust and chaos shows how mentally strong he is</p>
            <div className="buttons">
              <button><img src={like} alt="Like" /></button>
              <button><img src={dislike} alt="DisLike" /> </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
