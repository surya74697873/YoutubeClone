import "./Feed.css";
import image from "../../assets/thumbnail1.png";
import chnl_logo from "../../assets/user.jpg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { convertViewCount, key } from "../../data";
import { useEffect, useState } from "react";
import moment from "moment";

const Feed = ({ category }) => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true)

  const apiCall = async () => {
    setLoad(true)
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${key}`
    );
    const items = await res.json();
    setData(items.items);
    console.log(data);
    setLoad(false)
  };

  useEffect(() => {
    apiCall();
  }, []);

  console.log(data);

  if(load)
    return <h1>Loading....</h1>

  return (
    <div className="Feed">
      {data.map((item, index) => (
        <Link key={index} to={`/video/${item.snippet.categoryId}/${item.id}`} className="Collection">
          <div className="Video_Thumbnail">
            <img src={item.snippet.thumbnails.standard.url} alt="" />
          </div>
          <div className="Video_Desc">
            <div className="Channel_desc">
              <h2>
                {item.snippet.title}
              </h2>
              <h3>{item.snippet.channelTitle}</h3>
              <p>{convertViewCount(item.statistics.viewCount)} &bull; {moment(item.snippet.publishedAt).fromNow()} </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

Feed.propTypes = {
  category: PropTypes.any.isRequired,
};
export default Feed;
