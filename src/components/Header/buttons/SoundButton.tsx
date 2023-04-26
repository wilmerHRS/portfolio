import { useEffect, useRef, useState } from "react";
import { AiTwotoneSound } from "react-icons/ai";
import { FaVolumeMute } from "react-icons/fa";

const SoundButton = () => {
  const [music, setMusic] = useState(true);
  const tagMusic = useRef<HTMLAudioElement | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setMusic(!music);
  };

  // //! descomentar una vez acabes todo
  // useEffect(() => {
  //   if (music) {
  //     tagMusic.current.play();
  //   } else {
  //     tagMusic.current.pause();
  //   }
  // }, [music]);
  // //!

  useEffect(() => {
    document.body.addEventListener("load", () => {
      setMusic(!music);
    });
    tagMusic.current.volume = 0.3;
  }, []);

  return (
    <>
      <button
        className="transition ease-in-out bg-slate-200 dark:bg-zinc-700 hover:bg-blue-500 hover:text-white dark:hover:bg-cyan-400 rounded-full p-2"
        onClick={handleClick}
      >
        {music ? <FaVolumeMute size={18} /> : <AiTwotoneSound size={18} />}
      </button>
      <audio loop id="music" className="hidden" ref={tagMusic}>
        <source src="/music/kick-back.mp3" type="audio/mp3" />
      </audio>
    </>
  );
};

export default SoundButton;
