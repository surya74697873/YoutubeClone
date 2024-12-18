import "./PlayVideo.css"
import video1 from "../../assets/videos_subs/video.mp4"
import user from "../../assets/user.jpg"

const PlayVideo = () => {
  return (
    <div className="PlayVideo">
      <video src={video1} controls autoplay muted></video>
      <h2>Best Channel to learn coding that help you to be a web developer</h2>
      <div className="ChannelDesc">
        <div className="Channel">
        <div className="Channel_Profile">
          <img src={user} alt=""></img>
        </div>
      </div>
    </div>
  )
}

export default PlayVideo