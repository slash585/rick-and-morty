import { Characters } from "./types/character"; 

async function fetchCharacters() {
  let data = await fetch(`${process.env.RICK_AND_MORTY_BASE_URL}/character`)
  return data.json()
}

export default async function Home() {

  let characters: Characters | undefined
  let error = null

  try {
    characters = await fetchCharacters()
  } catch(err) {
    error = "Something went wrong"
  }

  if (error) {
    return <div>{error}</div>
  } 
  
  return (
    <div className="">

    </div>
  );
}
