// import exampleVideoData from '../data/exampleVideoData.js';

var VideoListEntry = (props) => {
  var currentVideo = props.video;

  return (
    <div onClick={() => props.handleClick(props.video)} className="video-list-entry media">
      <div className="media-left media-middle">
        <img className="media-object" src={currentVideo.snippet.thumbnails.default.url} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title" data={currentVideo}>{currentVideo.snippet.title}</div>
        <div className="video-list-entry-detail">{currentVideo.snippet.description}</div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;

