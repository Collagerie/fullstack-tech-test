import Image from "next/image";

export default function HomeHeader() {
  return (
    <div className="absolute flex flex-col w-full h-64 object-contain">
      <Image
        className="w-full"
        src="/images/homeBackground.jpeg"
        alt="Background"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute flex flex-col w-full h-fit text-center">
        <h1 className="text-2xl font-bold md:text-4xl text-white">
          Rick and Morty
        </h1>
      </div>
    </div>
  );
}
