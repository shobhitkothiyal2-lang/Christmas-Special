import { useRef } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music/christmas.mp3" type="audio/mp3" />
      </audio>

      <button
        onClick={() => audioRef.current.play()}
        className="fixed bottom-5 right-5 z-50 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm"
      >
        ▶ Play Music
      </button>
    </>
  );
}
