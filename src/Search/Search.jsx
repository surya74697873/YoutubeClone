import { useEffect, useState } from "react";
import { key } from "../data";
import { Link, useParams } from "react-router-dom";
import { convertViewCount } from "../data";
import moment from "moment";
import Oval from "react-loading-icons/dist/esm/components/oval";
import './Search.css'

const Search = () => {
  const { keyword } = useParams();
  const [videoList, setVideoList] = useState([]);
  const [videoDetails, setVideoDetails] = useState([])
  const [load, setLoad] = useState(true);

  async function apicall() {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${keyword}&regionCode=IN&key=${key}`
    );
    if (!res.ok) {
      console.error(res);
      return;
    }
    const resData = await res.json();
    setVideoList(resData.items);
  }

  useEffect(() => {
    apicall();
  }, [keyword]);

  useEffect(() => {
    const fetchDetails = async () => {
      const detailsPromises = videoList.map((video) =>  getDetails(video.id.videoId, video.snippet.channelId) );
      await Promise.all(detailsPromises);
      setLoad(false)
    };
  
    fetchDetails();
  }, [videoList]);

  async function videoDetailAPI(videoId) {
    const res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${key}`)

    if(!res.ok){ console.log(res); console.log(res) }
    const data = await res.json();
    return data.items[0]
  }
  
  async function channelDetailAPI(channelId) {
    const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${key}`;

    const res = await fetch(url);
    if (!res.ok) {
      console.log(res);
    }
    const data = await res.json();
    return data.items[0]
  }

  async function getDetails(videoid, channelid) {
    const videoDetail = await videoDetailAPI(videoid)
    const channelDetail = await channelDetailAPI(channelid)
    
    if(videoDetail && channelDetail)
     setVideoDetails(prev => [...prev, {
      videoID : videoDetail.id,
      videoCategoryID : videoDetail.snippet.categoryId,
      videoTitle : videoDetail.snippet.title,
      videoDesc : videoDetail.snippet.description,
      videoPostedOn : videoDetail.snippet.publishedAt,
      videoThumbnails : videoDetail.snippet.thumbnails,
      videoStatistics : videoDetail.statistics,
      channelID : channelDetail.id,
      channelTitle : channelDetail.snippet.title,
      channelThumbnails : channelDetail.snippet.thumbnails
    } ]);
  }

  console.log(videoDetails)

  if (load)
    return (
      <div className="Loading">
        {" "}
        <Oval strokeWidth={"5px"} stroke="black" />
      </div>
    );

  return (
    <div className="Search">
      {videoDetails.map((video) => (
        <Link
          key={video.videoID}
          to={`/video/${video.videoCategoryID}/${video.videoID}`}
          className="Searched_Video"
        >
          <div className="SVideo_Thumbnail">
            <img src={video.videoThumbnails.high.url} alt="" />
          </div>
          <div className="SVideo_desc">
            <h2>{video.videoTitle}</h2>
            <div className="SChannel_Logo">
              <img src={video.channelThumbnails.default.url} alt="" />
              <h3>{video.channelTitle}</h3>
            </div>
            <p>
              {convertViewCount(video.videoStatistics.viewCount)} &bull;{" "}
              {moment(video.videoPostedOn).fromNow()}{" "}
            </p>
            <p id="SV_Desc">{video.videoDesc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Search;
