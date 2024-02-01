export interface ICharacterCore {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  avatar: string;
}

export interface ICharacterRawData {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export interface ICharacter extends ICharacterCore {
  origin: ILocation;
  location: ILocation;
  episodes: IEpisode[];
}

export interface ILocation {
  id: number;
  name: string;
  type: string;
  noOfResidents: number;
  dimension: string;
}

export interface IEpisode {
  id: number;
  name: string;
  airDate: string;
  noOfCharacters: number;
  episode: string;
}

export interface IEpisodeRawData {
  id: number;
  name: string;
  air_date: string;
  characters: string[];
  episode: string;
}
