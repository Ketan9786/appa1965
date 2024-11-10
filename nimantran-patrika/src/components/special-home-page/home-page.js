import { useRef, useEffect } from "react";
import "./home-page-style.css";

import backgroundVideo from "../../assets/videos/videoplayback.mp4"; // Import your video here

const HomePage = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.6; // Adjust this value to slow down the speed (e.g., 0.5 is half speed)
        }
    }, []);

    return (
        <div className="container">
            {/* Background video */}
            <video
                className="background-video"
                src={backgroundVideo}
                autoPlay
                loop
                muted
                ref={videoRef} // Attach ref to the video element
            ></video>

        </div>
    );
};

export default HomePage;
