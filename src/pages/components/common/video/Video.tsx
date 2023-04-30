import React from 'react';
import Hls from 'hls.js';

interface VideoProps {
  source: string;
}

const Video: React.FC<VideoProps> = ({ source }) => {
  const hls = new Hls();
  const videoEl = React.useRef<HTMLVideoElement>(null);
  React.useEffect(() => {
    if (videoEl.current) {
      hls.attachMedia(videoEl.current);
      hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        hls.loadSource(source);
      });
    }
  }, [hls, source]);

  return (
    <div>
      <video
        ref={videoEl}
        autoPlay={true}
        muted={true}
      />
    </div>
  );
};

export default Video;