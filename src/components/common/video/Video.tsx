import React from 'react';
import Hls from 'hls.js';
import {inspect} from "util";
import * as styles from './Video.styles'

const Video = ({source}) => {
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
    <video
      style={styles.video}
      ref={videoEl}
      autoPlay={true}
      muted={true}
    />
  );
};

export default Video;