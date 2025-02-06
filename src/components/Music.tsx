import { useEffect, useRef } from "react";
import HER from "../assets/musics/H.E.R. - Best Part (Lyrics) Ft. Daniel Caesar.mp3";

const Music = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current
        .play()
        .catch((error) => console.log("Autoplay blocked:", error));
    }
  }, []);
  return <audio ref={audioRef} src={HER} hidden loop autoPlay />;
};

export default Music;
