import { ICharacter, IEpisode, ILocation } from "@/types/types";

const url = "https://rickandmortyapi.com/graphql";

const query = `
query getCharacterData($id: ID!){
        character (id: $id){
            name
            species
            type
            status
            species
            gender
            image
            origin {
                id
                name
                type
                residents {
                  id
                }
                dimension
              }
            location {
              id
              name
              type
              residents {
                id
              }
              dimension
            }
            episode {
              id
              name
              air_date
              characters {
                id
              }
              episode
            }
          }
        }
`;

interface getCharacterDataByIdProps {
  id: Number;
}

const getCharacterDataById = async ({ id }: getCharacterDataByIdProps) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: query,
        variables: { id },
      }),
    });

    const { data } = await response.json();

    const episodeInfo: [IEpisode] = data.character.episode.map((episode) => {
      return {
        id: episode.id,
        name: episode.name,
        airDate: episode.air_date,
        noOfCharacters: episode.characters.length,
        episode: episode.episode,
      };
    });

    const locationInfo: ILocation = {
      id: data.character.location.id,
      name: data.character.location.name,
      type: data.character.location.type,
      noOfResidents: data.character.location.residents.length,
      dimension: data.character.location.dimension,
    };

    const originInfo: ILocation = {
      id: data.character.origin.id,
      name: data.character.origin.name,
      type: data.character.origin.type,
      noOfResidents: data.character.origin.residents.length,
      dimension: data.character.origin.dimension,
    };

    const characterData: ICharacter = {
      id: data.character.id,
      name: data.character.name,
      status: data.character.status,
      species: data.character.species,
      gender: data.character.gender,
      avatar: data.character.image,
      origin: originInfo,
      episodes: episodeInfo,
      location: locationInfo,
    };
    return characterData as ICharacter;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
