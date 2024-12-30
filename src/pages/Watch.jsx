
import VideoPlayer from '../components/VideoPlayer';

const Watch = () => {
  const videoUrl = 'https://www.youtube.com/watch?v=hNYHHxTXc3w'; // Replace with your video URL
  const title = 'KASARA GHAT';
  const thumbnailUrl = './hero.jpg'; // Replace with your thumbnail URL

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center p-4">
      <h1 className="text-3xl text-white mb-6">Netflix-style Video Player</h1>
      <VideoPlayer videoUrl={videoUrl} title={title} thumbnailUrl={thumbnailUrl} />
    </div>
  );
};

export default Watch;
