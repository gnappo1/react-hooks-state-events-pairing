import { useState } from 'react'

const Reactions = ({upvotes, downvotes}) => {
  const [upvoteCount, setUpvoteCount] = useState(upvotes);
  const [downvoteCount, setDownvoteCount] = useState(downvotes);

  // const upvote = () => {
  //   return setUpvoteCount(currentVal => currentVal + 1)
  // }

  // const downvote = () => {
  //   return setDownvoteCount(currentVal => currentVal - 1)
  // }

  const handleClick = (e) => {
    if (e.target.name === 'upvote') {
      return setUpvoteCount(currentVal => currentVal + 1)
    } else {
      return setDownvoteCount(currentVal => currentVal + 1)
    }
  }

  return (
    <div className='reactions-btn' onClick={handleClick}>
      <button name="upvote">{upvoteCount} 👍🏻</button>
      <button name="downvote">{downvoteCount} 👎🏻</button>
    </div>
  )
}

export default Reactions