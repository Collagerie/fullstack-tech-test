import HomePage from "@/components/HomePage";
import { TaskIntro } from "@/components/organisms/TaskIntro";
import Image from "next/image";

export default function Home() {
  return (
    <main className='text-center flex flex-col items-center justify-start gap-5 overflow-hidden h-screen'>
      <Image
        src='/bgImage.jpg'
        alt='RnMBg'
        width={200}
        height={200}
        className=' bg-gray-200 w-full h-64 object-cover absolute top-0 left-0 right-0 bottom-56 z-0 object-top opacity-35'
      />
      <HomePage />
      {/* <TaskIntro /> */}
    </main>
  );
}
