import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import { getCharacters } from "../services/api";
import type { Character } from "../types/Character";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    getCharacters().then(setCharacters);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Hero />

      <div className="grid gap-4 md:grid-cols-3">
        {characters.slice(0, 6).map((character) => (
          <Card key={character.id}>
            <CardHeader>
              <CardTitle>{character.name}</CardTitle>
            </CardHeader>

            <CardContent>
              <img
                src={character.image}
                alt={character.name}
                className="rounded-md"
              />

              <p>Status: {character.status}</p>
              <p>Species: {character.species}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}