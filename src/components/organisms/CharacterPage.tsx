"use client";
import { useState, useEffect } from "react";
import { ICharacter } from "@/types/types";
import { useParams } from "next/navigation";
import { getCharacterDataById } from "@/app/api/routes/getCharacterDataById";

export default function CharacterPage() {
  const [character, setCharacter] = useState<ICharacter | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const data = await getCharacterDataById({ id });
      setCharacter(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="w-screen text-center pt-40">
        <h3 className="text-1xl text-black font-semibold">
          Character Page Loading ...
        </h3>
        <br />
        <p className="loader"></p>
      </div>
    );
  } else
    return (
      <>
        <div className="w-screen pl-20">
          {character && (
            <>
              <div className="absolute top-56 left-40 flex text-white">
                <img
                  className="image rounded-full"
                  width="200px"
                  src={character.avatar}
                  alt={character.name}
                ></img>
                <div className="pl-6 pt-4">
                  <ul>
                    <li className="flex w-full justify-start pb-6">
                      <h2 className="font-bold text-5xl">{character.name}</h2>
                    </li>
                    <li className="flex w-full justify-start gap-2">
                      <p className="font-semibold">Status:</p>
                      <p>{character.status}</p>
                    </li>
                    <li className="flex w-full justify-start gap-2">
                      <p className="font-semibold">Origin:</p>
                      <p>{character.origin.name}</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-20">
                <h3 className="font-semibold text-3xl pb-4">
                  Location Details:
                </h3>
                <ul className="flex flex-col gap-1">
                  <li className="flex w-full justify-start gap-2">
                    <p className="font-semibold">Name:</p>
                    <p>{character.location.name}</p>
                  </li>
                  <li className="flex w-full justify-start gap-2">
                    <p className="font-semibold">Type:</p>
                    <p>{character.location.type}</p>
                  </li>
                  <li className="flex w-full justify-start gap-2">
                    <p className="font-semibold">Dimension:</p>
                    <p>{character.location.dimension}</p>
                  </li>
                  <li className="flex w-full justify-start gap-2">
                    <p className="font-semibold">No. of Residents:</p>
                    <p>{character.location.noOfResidents}</p>
                  </li>
                </ul>
              </div>
              <div className="py-10">
                <h3 className="font-semibold text-3xl pb-4">
                  Episodes ({character.episodes.length}):
                </h3>
                <ul className="flex flex-col gap-1">
                  <li className="flex w-full justify-start gap-2">
                    <p className="font-semibold">First appearance:</p>
                    <p>{character.episodes[0].name}</p>
                    <p>{character.episodes[0].episode}</p>
                  </li>
                  <li className="flex w-full justify-start gap-2">
                    <p className="font-semibold">First appearance air date:</p>
                    <p>{character.episodes[0].airDate}</p>
                  </li>
                  <li className="flex w-full justify-start gap-2">
                    <p className="font-semibold">
                      First appearance character count:
                    </p>
                    <p>{character.episodes[0].noOfCharacters}</p>
                  </li>
                  <li className="flex w-full justify-start gap-2">
                    <p className="font-semibold">Last appearance:</p>
                    <p>
                      {character.episodes[character.episodes.length - 1].name}
                    </p>
                    <p>
                      {
                        character.episodes[character.episodes.length - 1]
                          .episode
                      }
                    </p>
                  </li>
                  <li className="flex w-full justify-start gap-2">
                    <p className="font-semibold">Last appearance air date:</p>
                    <p>
                      {
                        character.episodes[character.episodes.length - 1]
                          .airDate
                      }
                    </p>
                  </li>
                  <li className="flex w-full justify-start gap-2">
                    <p className="font-semibold">
                      Last appearance character count:
                    </p>
                    <p>
                      {
                        character.episodes[character.episodes.length - 1]
                          .noOfCharacters
                      }
                    </p>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </>
    );
}
