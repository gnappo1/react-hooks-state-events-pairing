const Comment = ({ id, comment, user }) => {
    return (
        <div className="comment-card" id={id}>
            <h4>{user}</h4>
            <p>{comment}</p>
        </div>
    )
}

export default Comment;