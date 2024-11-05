import CharacterList from "./_components/characterList";
import { Characters } from "./types/character"; 

async function fetchCharacters() {
  let data = await fetch(`${process.env.RICK_AND_MORTY_BASE_URL}/character`)
  return data.json()
}

export default async function Home() {
  let characters: Characters = await fetchCharacters()

  return (
    <div className="flex justify-center items-center min-h-screen">
      <CharacterList characters={characters.results} />
    </div>
  );
}
