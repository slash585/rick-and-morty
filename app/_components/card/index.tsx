import { Character } from "@/app/types/character";
import React from "react";
import Image from "next/image";

interface CardProps {
  character: Character;
}

function Card({ character }: CardProps) {
  return (
    <div key={character.id} className="p-4 border rounded shadow">
      <Image
        src={character.image}  
        alt={character.name}    
        width={200}             
        height={200}            
        className="rounded-md" 
      />
      <h2 className="text-lg font-semibold">{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Gender: {character.gender}</p>
    </div>
  );
}

export default Card;
