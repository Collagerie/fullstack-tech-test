import Image from "next/image";
import Link from "next/link";

export default function CharacterHeader() {
  return (
    <>
      <div className="relative flex flex-col w-full h-96 object-contain">
        <Image
          src="/images/characterBackground.jpeg"
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute left-4 top-4 flex flex-col w-full text-white">
        <h1 className="pb-4 text-2xl font-bold md:text-4xl">Rick and Morty</h1>
        <Link href={"/"}> &lt; Back to character listing</Link>
      </div>
    </>
  );
}
