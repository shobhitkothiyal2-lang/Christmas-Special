import Snow from "../components/Snow";
import MusicPlayer from "../components/MusicPlayer";
import ChristmasTree from "../components/ChristmasTree";
import Section from "../components/Section";
import Timeline from "../components/Timeline";
import Gallery from "../components/Gallery";
import Letter from "../components/Letter";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#120024] via-[#2b003f] to-black text-white pb-32 relative overflow-hidden">

      <Snow />
      <MusicPlayer />

      <div className="text-center pt-24 px-4">
        <h1 className="text-4xl font-semibold tracking-wide">
          Merry Christmas My Love❤️
        </h1>
        <p className="opacity-80 mt-2">
          This is a small gift from me to you 🎁
        </p>
      </div>

      <ChristmasTree />

      <Section><Timeline /></Section>
      <Section><Gallery /></Section>
      <Section><Letter /></Section>

    </div>
  );
}
