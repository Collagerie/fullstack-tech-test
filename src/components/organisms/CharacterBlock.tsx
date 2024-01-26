import { ICharacterCore } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  char: ICharacterCore;
};

const CharacterBlock = ({ char }: Props) => {
  return (
    <div
      className='flex flex-col items-start justify-start text-wrap space-y-3 pb-3 md:pb-9 '
      key={char.id}>
      <div className=' bg-red-300'>
        <Image
          src={char.avatar}
          alt={char.name}
          width={200}
          height={200}
          className='w-100'
        />
      </div>
      <div className='flex justify-start items-start flex-col text-nowrap md:text-pretty text-sm md:text-md font-medium text-left h-3/6'>
        <p>Name: {char.name}</p>
        <p>Gender: {char.gender}</p>
        <p>Species: {char.species}</p>
      </div>

      <Link href={`/character/${char.id}`} className=' w-full md:w-5/6'>
        <button className='bg-gray-300 w-full  py-3 shadow-lg rounded-md hover:bg-slate-400'>
          View Profile
        </button>
      </Link>
    </div>
  );
};

export default CharacterBlock;
