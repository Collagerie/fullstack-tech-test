import { ICharacterCore } from "@/types/types";

const url = "https://rickandmortyapi.com/graphql";

const query = `
query getMortys($name: String, $status: String, $page: Int){
    characters (page: $page, filter: { name: $name, status: $status }) {
      results {
        id
        name
        status
        species
        gender
        image
      }
    }
  }
`;

export const getAliveMortyData = async ({ page = 1 }) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: query,
        variables: { name: "Morty", status: "Alive", page },
      }),
    });

    const { data } = await response.json();

    const characterData = data.characters.results.map(
      (character: ICharacterCore) => {
        return {
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          gender: character.gender,
          avatar: character.image,
        };
      }
    );
    return characterData as [ICharacterCore];
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
