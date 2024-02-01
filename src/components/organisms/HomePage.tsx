"use client";
import { getAliveMortyData } from "@/app/api/routes/getAliveMortyData";
import { useState, useEffect } from "react";
import { ICharacterCore } from "@/types/types";
import Link from "next/link";

function HomePage() {
  const [characters, setCharacters] = useState<
    ICharacterCore[] | [] | undefined
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const data = await getAliveMortyData({ page: 1 });
      setCharacters(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="w-screen text-center pt-40">
        <h3 className="text-1xl text-black font-semibold">
          Home Page Loading ...
        </h3>
        <br />
        <p className="loader"></p>
      </div>
    );
  } else
    return (
      <>
        <div className="relative w-screen grid grid-cols-2 gap-10 lg:grid-cols-6 px-12 pt-44">
          {characters &&
            characters.map((character: ICharacterCore) => {
              return (
                <div
                  key={character.id}
                  className="inline-block w-40 text-center"
                >
                  <img
                    className="image rounded-lg"
                    width="160px"
                    src={character.avatar}
                    alt={character.name}
                  ></img>
                  <div className="w-40 text-xs flex flex-col">
                    <ul className="w-full flex flex-col justify-around py-2 h-24">
                      <li className="flex w-full justify-start gap-2">
                        <p className="font-semibold">Name:</p>
                        <p className="text-start">{character.name}</p>
                      </li>
                      <li className="flex w-full justify-start gap-2">
                        <p className="font-semibold">Gender:</p>
                        <p>{character.gender}</p>
                      </li>
                      <li className="flex w-full justify-start gap-2">
                        <p className="font-semibold">Species:</p>
                        <p>{character.species}</p>
                      </li>
                    </ul>
                    <Link
                      href={`/character/${character.id}`}
                      className="w-full"
                    >
                      <button className="w-full h-8 bg-yellow-300 hover:bg-yellow-400 text-sm rounded-sm">
                        See more
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </>
    );
}

export default HomePage;
