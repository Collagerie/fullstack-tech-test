import React from "react";
import mockData from "../../mockdata/allCharacters.json";
import { ICharacterCore } from "@/types/types";
import CharacterBlock from "./organisms/CharacterBlock";
const HomePage = () => {
  const x = [
    1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 1, 2, 3,
    4, 5, 6, 7, 8, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 1, 2, 3, 4, 5, 6,
    7, 8, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 8,
    9, 10,
  ];
  const newData: ICharacterCore[] = [];

  mockData.data.forEach((char) => newData.push(char));
  mockData.data.forEach((char) => newData.push(char));
  return (
    <div className='flex flex-col z-50 overflow-scroll w-screen pt-24 space-y-12 md:px-20 px-10'>
      <div>
        <p className='text-4xl font-semibold'>Rick and Morty</p>
      </div>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-4 '>
        {newData.map((char: ICharacterCore) => (
          <CharacterBlock char={char} key={char.id} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
