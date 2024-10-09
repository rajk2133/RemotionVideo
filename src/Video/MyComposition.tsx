import React, { useEffect, useState } from 'react';
import { Composition } from 'remotion';
import MyVideo from './MyVideo'; 

const MyComposition:React.FC = () => {
  const [videoDuration, setVideoDuration] = useState<number | null>(1243);
  
  // useEffect(() => {
  //   const videoElement = document.createElement('video');
  //   videoElement.src = require('../assets/input.mp4'); 
  //   videoElement.onloadedmetadata = () => {
  //     const durationInFrames = Math.ceil(videoElement.duration * 30);
  //     console.log(`Video duration in frames: ${durationInFrames}`);
  //     setVideoDuration(durationInFrames);
  //   };
   
  //   return () => {
  //       videoElement.src = '';
  //     };
  // }, []);

  // if (videoDuration === null){
  //   return null;
  // }

  return (
      <Composition
        id="MyVideo"
        component={MyVideo as any}
        durationInFrames={videoDuration as any}
        fps={30}
        width={1080}
        height={1920}
      />
    );
};

export default MyComposition;
