import video from "../data/video.js";
import VideoComments from "./VideoComments.jsx";
import VideoDetails from "./VideoDetails.jsx";
import VideoLikes from "./VideoLikes.jsx";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        allowFullScreen
        title={video.title}
      />

      <VideoDetails title={video.title} views={video.views} createdAt={video.createdAt} />
      <VideoLikes upvotes={video.upvotes} downvotes={video.downvotes} />
      < br />
      <VideoComments comments={video.comments} />
    </div>
  );
}

export default App;





























