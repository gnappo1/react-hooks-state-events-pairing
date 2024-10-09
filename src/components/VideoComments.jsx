import { useState } from "react";
import Comment from "./Comment";

function VideoComments({ comments }) {
    const [show, setShow] = useState(true);

    const mappedComments = comments.map(comment => <Comment key={comment.id} comment={comment}/>)
    
    return (
      <div>
        <button onClick={() => setShow((current) => !current)}>
          {show ? "Hide" : "Show"} Comments
        </button>
        <hr />
        {show && (
          <>
            <h3>{comments.length} Comments</h3>
            {mappedComments}
          </>
        )}
      </div>
    );
}

export default VideoComments;