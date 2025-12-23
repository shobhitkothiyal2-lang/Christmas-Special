function Gallery() {
  const photos = [
    "/photos/img1.jpg",
    "/photos/img2.jpg",
    "/photos/img3.jpg",
  ];

  return (
    <div className="mt-20 px-4 animate-fade">
      <h2 className="text-2xl text-center mb-6">Our Sweet Memories 📸</h2>
      <h2 className="text-2xl text-center mb-6">There Are Lot's Of Memories We Created Together But These Are The Best Memories Among Those </h2>

      <div className="flex flex-col gap-8 max-w-[600px] mx-auto">
        {photos.map((src, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-lg group transform transition duration-500 hover:scale-[1.02]"
          >
            <img
              src={src}
              alt={`memory-${i}`}
              className="w-full h-auto object-contain"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-500">
              <span className="text-5xl animate-pulse">❤️</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
