import { Character } from "@/app/types/character"
import { Metadata } from "next" 

async function fetchCharacterDetails(id: string) {
  let data = await fetch(`${process.env.RICK_AND_MORTY_BASE_URL}/character/${id}`)
  return data.json()
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = await params
  const character: Character = await fetchCharacterDetails(id);
  
  return {
    title: character.name,
    description: `Details about ${character.name} from Rick and Morty`
  };
}

async function Details({ params }: { params: { id: string } }) {
  const { id } = await params

  let character: Character = await fetchCharacterDetails(id)

  return (
    <div>Detail {character.name}</div>
  )
}

export default Details