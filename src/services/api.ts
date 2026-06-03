import type { Character } from "../types/Character";

export async function getCharacters(): Promise<Character[]> {
  const response = await fetch(
    "https://rickandmortyapi.com/api/character"
  );

  const data = await response.json();

  return data.results;
}