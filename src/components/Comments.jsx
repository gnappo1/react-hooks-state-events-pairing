import {useState} from 'react'
import CommentCard from './CommentCard';

const Comments = ({comments}) => {
    const [hideComments, setHideComments] = useState(false);

    const handleClick = () => {
        // setHideComments(!hideComments)
        setHideComments(currentVal => !currentVal)
    }

    const mappedComments = comments.map(comment => <CommentCard comment={comment} key={comment.id}/>)

    return (
        <div>
            <button onClick={handleClick}>Hide Comments</button>
            <hr />
            {!hideComments ? (
                <>
                    <h2>{comments.length} Comments</h2>
                    {mappedComments}
                </>
            ) : null}
        </div>
    )
}

export default Comments