const url = 'https://rickandmortyapi.com/graphql'

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
  }
`

const getData = async (page = 1) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: query,
        variables: { name: "Morty", status: "Alive", page},
      }),
    });

    const { data } = await response.json();

    let characterData = data.characters.results.map((character) => {

      let episodeInfo = character.episode.map((episode) => {
        return {
          id: episode.id,
          name: episode.name,
          episode: episode.episode,
          airDate: episode.air_date,
          noOfCharacters: episode.characters.length,
        }
      })

      return {
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          gender: character.gender,
          avatar: character.image,
          noOfResidents: character.location.residents.length,
          episode: episodeInfo,
      }
    })

    console.log(JSON.stringify(characterData));
    return characterData;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

(async () => {
  await getData()
  console.log('✅ Done')
})()