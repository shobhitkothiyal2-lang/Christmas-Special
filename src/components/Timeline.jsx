const moments = [
  {
    date: "The Day We Met",
    text: "The moment our eyes met, my heart knew something magical had begun 💖✨. From that day, life felt brighter and sweeter.",
  },
  {
    date: "Our First Talk",
    text: "That first conversation lingered in my mind all day 😍. I didn’t know then, but I was already falling for you.",
  },
  {
    date: "Our First Fight 😅",
    text: "Even our little arguments couldn’t shake us ❤️‍🔥. They only made me realize how much I truly need you in my life.",
  },
  {
    date: "Today",
    text: "Every day with you feels like a new adventure 🌟. I still choose you, now and forever 💑.",
  },
];

function Timeline() {
  return (
    <div className="max-w-[600px] mx-auto mt-30 px-4 animate-fade">
      <h2 className="text-3xl md:text-4xl mb-8 text-center font-bold text-pink-300 animate-pulse">
        Our Love Story ✨
      </h2>

      <div className="flex flex-col gap-8">
        {moments.map((item, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-r from-pink-100/20 to-pink-200/10 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-pink-200/30 hover:scale-105 transition-transform duration-500"
          >
            <h3 className="font-semibold text-xl text-pink-400">{item.date}</h3>
            <p className="text-base md:text-lg mt-2 text-white/90 leading-relaxed">
              {item.text}
            </p>

            {/* Small floating hearts */}
            <div className="absolute top-2 right-2 flex flex-col gap-1">
              <span className="text-pink-300 animate-bounce">💖</span>
              <span className="text-pink-400 animate-bounce delay-200">💖</span>
              <span className="text-pink-200 animate-bounce delay-400">💖</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
