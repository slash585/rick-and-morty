import { Character } from "@/app/types/character"

async function fetchCharacterDetails(id: string) {
  let data = await fetch(`${process.env.RICK_AND_MORTY_BASE_URL}/character/${id}`)
  return data.json()
}

async function Details({ params }: { params: { id: string } }) {
  const { id } = await params

  let character: Character = await fetchCharacterDetails(id)

  return (
    <div>Detail {character.name}</div>
  )
}

export default Details