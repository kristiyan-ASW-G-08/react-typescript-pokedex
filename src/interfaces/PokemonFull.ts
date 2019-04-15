interface PokemonFull {
  abilities: object[];
  forms: object[];
  game_indices: [];
  base_experience: number;
  height: number;
  weight: number;
  order: number;
  name: string;
  stats: object[];
  species: object;
  sprites: object;
  id: number;
  is_default: boolean;
  moves: object[];
  types: object[];
  location_area_encounters: string;
  held_items: object[];
}

export default PokemonFull;
