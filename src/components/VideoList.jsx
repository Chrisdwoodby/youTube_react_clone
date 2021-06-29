import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => {

  return (
    <div className="video-list">
      {props.videos.map((item, i) => {
        return <VideoListEntry video={item} key={i} handleClick={props.handleClick}/>;
      })}
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

export default VideoList;