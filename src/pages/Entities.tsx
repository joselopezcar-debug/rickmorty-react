import { useEffect, useState } from "react";
import type { Character } from "../types/Character";
import { getCharacters } from "../services/api";

export default function Entities() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    getCharacters().then(setCharacters);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="mb-4 text-3xl font-bold">
        Characters
      </h2>

      <ul className="space-y-2">
        {characters.map((character) => (
          <li
            key={character.id}
            className="rounded border p-3"
          >
            <p>Name: {character.name}</p>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}