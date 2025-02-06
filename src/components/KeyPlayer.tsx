import { useEffect, useRef } from "react";
import Key from "../assets/key.mp4";

const KeyPlayer = ({
  height,
  width,
  shouldPause = false,
}: {
  height: number;
  width: number;
  shouldPause: boolean;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (shouldPause) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
  }, [shouldPause]);
  return (
    <video
      ref={videoRef}
      width={height}
      height={width}
      controls
      loop
      autoPlay
      className="rounded rounded-lg border-3 border-pink-400"
    >
      <source src={Key} type="video/mp4" />
    </video>
  );
};

export default KeyPlayer;
