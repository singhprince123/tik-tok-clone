import React, { useRef, useState }from 'react';
import './Video.css';
import videoUrl from './videos/video.mp4';
import VideoFooter from './VideoFooter'

function Video() {
    const [playing, setPlaying ] = useState(false);
    const videoRef = useRef(null)
    
    const onVideoClick = () => {
        if(playing){
            videoRef.current.pause()
            setPlaying(false)
        }else {
            videoRef.current.play();
            setPlaying(true)
        }
    };
    
    return (
        <div className="video">
            <video
            className ="video__player"
            src={videoUrl}
            onClick ={onVideoClick}
            ref={videoRef}
            >
            </video>
            <VideoFooter />
            {/* <VideoSidebar /> */}
        </div>
    )
}

export default Video;
