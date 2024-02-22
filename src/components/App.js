import video from "../data/video.js";
import Comments from "./Comments.jsx";
import Reactions from "./Reactions.jsx";
import Video from "./Video.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video {...video} />
      <Reactions {...video} />
      <Comments comments={video.comments} />
    </div>
  );
}

export default App;
