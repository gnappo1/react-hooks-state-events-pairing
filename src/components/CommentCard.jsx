import React from 'react'

const CommentCard = ({comment}) => {
  return (
    <div className='comment-card'>
        <h3>{comment.user}</h3>
        <span>{comment.comment}</span>
    </div>
  )
}

export default CommentCard