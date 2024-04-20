import Image from "next/image";

export default function HomePage() {

  const images = ["https://i.ytimg.com/vi/8NMJxyDwP6A/maxresdefault.jpg", "https://i.ytimg.com/vi/8NMJxyDwP6A/maxresdefault.jpg", "https://i.ytimg.com/vi/8NMJxyDwP6A/maxresdefault.jpg"]
  
  
  return (
    <main className="">
      <div className="flex flex-wrap">
        {images.map((image, index) => (
          <Image src={image} key={index} width={200} height={200} alt="random image" />
        ))}
      </div>
    </main>
  );
}
