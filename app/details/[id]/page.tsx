import { Character } from "@/app/types/character";
import { Metadata } from "next";
import Image from "next/image";

async function fetchCharacterDetails(id: string) {
  let data = await fetch(
    `${process.env.RICK_AND_MORTY_BASE_URL}/character/${id}`
  );
  return data.json();
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = await params;
  const character: Character = await fetchCharacterDetails(id);

  return {
    title: character.name,
    description: `Details about ${character.name} from Rick and Morty`,
  };
}

async function Details({ params }: { params: { id: string } }) {
  const { id } = await params;

  let character: Character = await fetchCharacterDetails(id);
  console.log(character);
  return (
    <div className="flex justify-center mt-7">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image
          width={500}
          height={500}
          className="w-full"
          src={character.image}
          alt={character.name}
        />
        <div className="px-6 py-4 text-center">
          <div className="font-bold text-xl mb-2">{character.name}</div>
          <div className="flex justify-center p-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <p className="m-4">Status {character.status}</p>
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <p className="m-4">Gender {character.gender}</p>
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <p className="m-4">Species {character.species}</p>
          </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
