import "./PlayVideo.css";
import user from "../../assets/user.jpg";
import user_profile from "../../assets/videos_subs/profile.png"
import like from "../../assets/videos_subs/like.png";
import dislike from "../../assets/videos_subs/dislike.png";
import share from "../../assets/videos_subs/share.png";
import list from "../../assets/videos_subs/playlist.png";
import { convertViewCount } from "../../data";
import { useEffect, useState } from "react";
import { key } from "../../data";
import PropTypes from "prop-types"
import moment from "moment";

const PlayVideo = ({videoId}) => {
  const [videoDetails, setVideoDetails] = useState(null)

  async function videoDetailAPI() {
    const res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${key}`)

    if(!res.ok){ console.log(res); return }
    const data = await res.json();
    setVideoDetails(data.items[0])
  }

  useEffect(() => {
    videoDetailAPI()
  },[videoId])

  console.log(videoDetails);
  

  return (
    <div className="PlayVideo">
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <h2>{videoDetails ? videoDetails.snippet.title : ""}</h2>
      <div className="ChannelDesc">
        <div className="Channel">
          <div className="Channel_Profile">
            <img src={user} alt=""></img>
            <div className="Channel_Subscribers">
              <h2>{videoDetails ? videoDetails.snippet.channelTitle : ""}</h2>
              <p>1M Subscribers</p>
            </div>
            <button>Subscribe</button>
          </div>
          <div className="Others">
            <div className="LikeandDislike">
              <div className="Like">
                  <img src={like} alt="Like" /> <span>{convertViewCount(Number(videoDetails?.statistics.likeCount))}</span>
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
          <div>
            <span><b>{convertViewCount(videoDetails?.statistics.viewCount)} views {moment(videoDetails?.snippet.publishedAt).fromNow()}</b></span>
          </div>
          <p>{}</p>
          <p>{videoDetails ? videoDetails.snippet.localized.description : ""}</p>
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

PlayVideo.propTypes = {
  videoId : PropTypes.any.isRequired,
}

export default PlayVideo;
