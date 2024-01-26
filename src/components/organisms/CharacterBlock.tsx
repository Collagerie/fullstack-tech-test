import { ICharacterCore } from "@/types/types";
import Image from "next/image";
import React from "react";

type Props = {
  char: ICharacterCore;
};

const CharacterBlock = ({ char }: Props) => {
  return (
    <div
      className='flex flex-col items-center justify-center text-wrap md:w-4/6'
      key={char.id}>
      <Image src={char.avatar} alt={char.name} width={100} height={100} />
      <p>Name:{char.name}</p>
    </div>
  );
};

export default CharacterBlock;
