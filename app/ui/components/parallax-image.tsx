"use client";

interface ParallaxImage {
  imageURL: string;
  title: string;
  text: string;
}

export default function ParallaxImage({
  imageURL,
  title,
  text,
}: ParallaxImage) {
  return (
    <div className="relative h-[400px] w-full">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `url(${imageURL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <p className="text-xl font-bold tracking-wider mb-6">{title}</p>
          <p className="text-4xl md:text-5xl font-bold max-w-4xl">{text}</p>
        </div>
      </div>
    </div>
  );
}
