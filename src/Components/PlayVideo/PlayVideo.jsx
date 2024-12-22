import like from "../../assets/videos_subs/like.png";
import dislike from "../../assets/videos_subs/dislike.png";
import share from "../../assets/videos_subs/share.png";
import list from "../../assets/videos_subs/playlist.png";

import { convertViewCount } from "../../data";
import { useEffect, useState } from "react";
import { key } from "../../data";
import PropTypes from "prop-types"
import moment from "moment";
import "./PlayVideo.css";

const PlayVideo = ({videoId}) => {
  const [videoDetails, setVideoDetails] = useState(null)
  const [channelDetails, setChannelDetails] = useState(null);
  const [channelId, setChannelId] = useState("")
  const [commentsDetails, setCommentsDetails] = useState([])

  async function videoDetailAPI() {
    const res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${key}`)

    if(!res.ok){ console.log(res); return }
    const data = await res.json();
    setVideoDetails(data.items[0])
    setChannelId(data.items[0].snippet.channelId)
  }
  
  async function channelDetailAPI() {
    const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${key}`;

    const res = await fetch(url);
    if (!res.ok) {
      console.log(res);
      return;
    }
    const data = await res.json();
    setChannelDetails(data.items[0]);
    // console.log(data.items[0])
  }

  async function commentsAPI() {
    
    const res = await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${key}`)
    const data = await res.json();
    console.log(data);
    setCommentsDetails(data.items)
  }

  useEffect(() => {
    videoDetailAPI()
    commentsAPI()
  },[videoId])

  useEffect(() => {
    channelDetailAPI()
  },[channelId])

  console.log(commentsDetails);
  

  return (
    <div className="PlayVideo">
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <h2>{videoDetails ? videoDetails.snippet.title : ""}</h2>
      <div className="ChannelDesc">
        <div className="Channel">
          <div className="Channel_Profile">
            <div className="Channel_Profile_Details">
              <img src={channelDetails?.snippet.thumbnails?.default.url} alt=""></img>
            <div className="Channel_Subscribers">
              <h2>{channelDetails?.snippet.localized.title}</h2>
              <p>{convertViewCount(channelDetails?.statistics.subscriberCount)}</p>
            </div>
            </div>
            <button id="Subscribe">Subscribe</button>
          </div>
          <div className="Others">
            <div className="LikeandDislike">
              <div className="Like">
                  <img src={like} alt="Like" /> <span>{convertViewCount(Number(videoDetails?.statistics.likeCount))}</span>
              </div> |
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
            <div><b>{convertViewCount(videoDetails?.statistics.viewCount)} views {moment(videoDetails?.snippet.publishedAt).fromNow()}</b></div>
          <p>{videoDetails ? videoDetails.snippet.localized.description : ""}</p>
        </div>
      </div>
      <hr />
      <div className="Comments">
        <h2>Comments</h2>
        {
          commentsDetails && commentsDetails.map((comment, index) => (
            <div key={index} className="Comment">
          <div className="User_Profile">
            <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
          </div>
          <div className="Comment_Text">
            <div className="Comment_Text_Post">
            <h2>{comment.snippet.topLevelComment.snippet.authorDisplayName}</h2>
            <p>{moment(comment.snippet.topLevelComment.snippet.publishedAt).fromNow()}</p>
            </div>
            <p>{comment.snippet.topLevelComment.snippet.textOriginal}</p>
            <div className="buttons">
              <button><img src={like} alt="Like" /> <span>{convertViewCount(comment.snippet.topLevelComment.snippet.likeCount)}</span></button>
              <button><img src={dislike} alt="DisLike" /> </button>
            </div>
          </div>
        </div>
          ))
        }
      </div>
    </div>
  );
};

PlayVideo.propTypes = {
  videoId : PropTypes.any.isRequired,
}

export default PlayVideo;
