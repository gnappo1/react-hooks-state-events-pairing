import { useState } from "react";

function VideoLikes({upvotes, downvotes}) {
   const [up, setUp] = useState(upvotes);
   const [down, setDown] = useState(downvotes);

    return (
      <div>
        <button onClick={() => setUp((current) => current + 1)}>{up}👍🏻</button>
        <button onClick={() => setDown((current) => current + 1)}>
          {down}👎🏻
        </button>
      </div>
    );
}

export default VideoLikes;