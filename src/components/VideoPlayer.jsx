import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ videoUrl, title, thumbnailUrl }) => {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [hovering, setHovering] = useState(false);

  const handlePlayPause = () => setPlaying(!playing);

  const handleVolumeChange = (e) => setVolume(e.target.value);

  const handleSeekChange = (e) => {
    const seekTo = (e.target.value / 100) * duration;
    playerRef.current.seekTo(seekTo);
  };

  const handleProgress = (state) => {
    setProgress((state.playedSeconds / duration) * 100);
  };

  const handleDuration = (duration) => setDuration(duration);

  const handleFullscreenToggle = () => setFullscreen(!fullscreen);

  return (
    <div
      className={`relative w-full h-[500px] ${fullscreen ? 'fixed top-0 left-0 w-full h-full z-50' : ''}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <ReactPlayer
        ref={playerRef}
        url={videoUrl}
        playing={playing}
        onProgress={handleProgress}
        onDuration={handleDuration}
        volume={volume}
        onClick={handlePlayPause}
        width="100%"
        height="100%"
        controls={false}
      />

      {/* Video Thumbnail */}
      {!playing && (
        <img
          src={thumbnailUrl}
          alt="Thumbnail"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-70 z-10"
        />
      )}

      {/* Play/Pause Button */}
      {!playing && !hovering && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl z-20">
          <button onClick={handlePlayPause} className="bg-black bg-opacity-50 p-4 rounded-full hover:bg-opacity-70">
            ▶️
          </button>
        </div>
      )}

      {/* Control Bar */}
      <div
        className={`absolute bottom-4 left-4 right-4 flex justify-between items-center text-white z-20 transition-opacity duration-300 ${hovering ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="text-lg font-bold max-w-[60%] truncate">{title}</div>
        <div className="flex items-center space-x-4">
          {/* Play/Pause Button */}
          {playing ? (
            <button
              onClick={handlePlayPause}
              className="bg-black bg-opacity-50 text-white px-4 py-2 rounded hover:bg-opacity-70"
            >
              Pause
            </button>
          ) : (
            <button
              onClick={handlePlayPause}
              className="bg-black bg-opacity-50 text-white px-4 py-2 rounded hover:bg-opacity-70"
            >
              Play
            </button>
          )}

          {/* Seek Bar */}
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleSeekChange}
            className="w-64"
          />

          {/* Volume Control */}
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-24"
          />

          {/* Fullscreen Button */}
          <button
            onClick={handleFullscreenToggle}
            className="bg-black bg-opacity-50 text-white px-4 py-2 rounded hover:bg-opacity-70"
          >
            {fullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;

