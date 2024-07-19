/* eslint-disable react/prop-types */

import { useState } from 'react'
import './VideoCard.css'

const VideoCard = props => {
	const { title, channelName, img } = props
	const [likesCount, setLikesCount] = useState(0)

	console.log(title)

	let increasedLikeByOne = () => {
		setLikesCount(likesCount + 1)
		// console.log(title, likesCount)
	}

	return (
		<>
			<div className='video'>
				<img className='video-img' src={img} alt='image' />
				<p>{title}</p>
				<p>{channelName}</p>
				{/* <span>Videos id {key}</span> */}
				<div className='video-footer'>
					<p>Likes: {likesCount}</p>
					<button onClick={increasedLikeByOne}>Like it!</button>
				</div>
			</div>
		</>
	)
}

export default VideoCard
