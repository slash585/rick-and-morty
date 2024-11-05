import { Character } from "@/app/types/character";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  character: Character;
}

function Card({ character }: CardProps) {
  return (
    <Link href={`details/${character.id}`} passHref>
      <div key={character.id} className="p-4 border rounded shadow border-[#97ce4c] flex flex-col justify-center align-middle text-center">
        <Image
          src={character.image}
          alt={character.name}
          width={200}
          height={200}
          className="rounded-md m-auto"
        />
        <h2 className="text-lg font-semibold mt-2 hover:text-[#97ce4c]">{character.name}</h2>
        <p className="hover:text-[#97ce4c]">Status: {character.status}</p>
        <p className="hover:text-[#97ce4c]">Gender: {character.gender}</p>
      </div>
    </Link>
  );
}

export default Card;
