import Comment from "./Comment";

const CommentContainer = ({ comments }) => {
    const mappedComments = comments.map(comment => <Comment {...comment} key={comment.id}/>)

    return (
      <div className="comment-list">
        <h3>{comments.length} Comments</h3>
        {mappedComments}
      </div>
    );
}

export default CommentContainer;