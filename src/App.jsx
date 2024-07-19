import './App.css'
import VideoCard from './components/VideoCard'
import { VIDEOS } from './videos'

function App() {
	return (
		<>
			<div className='video-container'>
				{VIDEOS.map(video => (
					<VideoCard
						key={video.id}
						// id={video.id}
						title={video.title}
						channelName={video.channelName}
						img={video.img}
					/>
				))}
			</div>
		</>
	)
}

export default App
