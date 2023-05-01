import React from 'react';
import Hls from 'hls.js';

const Video = () => {
  const source = `https://www.youtube.com/watch?v=CAbIoNTkqgo&ab_channel=What%27sForTea%3F`
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