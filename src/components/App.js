import { useState } from "react"

import video from "../data/video.js";
import Button from "./Button.jsx";
import Video from "./Video.jsx";
import CommentContainer from "./CommentContainer.jsx";

function App() {
  const [show, setShow] = useState(false)

  const buttonText = show ? "Hide" : "Show"
  
  const onClick = (e) => {
    setShow(currentValue => !currentValue)
  }

  return (
    <div className="App">
      <Video video={video} />
      <Button text={video.upvotes + " 👍🏻"} />
      <Button text={video.downvotes + " 👎🏻"} />
      <br /><br />
      <Button text={buttonText + " Comments"} onClick={onClick}/>
      <hr />
      {show && <CommentContainer comments={video.comments} />}
    </div>
  );
}

export default App;
