import "./Recommended.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { key } from "../../data";
import { useEffect, useState } from "react";
import moment from "moment";
import { convertViewCount } from "../../data";

const Recommended = ({ categoryId }) => {
  const [videoList, setVideoList] = useState([]);

  async function recommendedAPICall() {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${key}`
    );
    const items = await res.json();
    setVideoList(items.items);
  }

  useEffect(() => {
    recommendedAPICall();
  }, [categoryId]);

  return (
    <div className="Recommented">
      {videoList.map((item, index) => (
        <Link
          key={index}
          to={`/video/${item.snippet.categoryId}/${item.id}`}
          className="Recommented_Video"
        >
          <div className="RVideo_Thumbnail">
            <img src={item.snippet.thumbnails.standard.url} alt="" />
          </div>
          <div className="RVideo_Desc">
            <div className="RChannel_desc">
              <h2>{item.snippet.title}</h2>
              <h3>{item.snippet.channelTitle}</h3>
              <p>
                {convertViewCount(item.statistics.viewCount)} &bull;{" "}
                {moment(item.snippet.publishedAt).fromNow()}{" "}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

Recommended.propTypes = {
  categoryId: PropTypes.any.isRequired,
};

export default Recommended;
