"use client";

import { useState } from "react";
import { Character } from "../../types/character";
import Filter from "../filter";
import Card from "../card";

interface CharacterListProps {
  characters: Character[];
}

function CharacterList({ characters }: CharacterListProps) {
  const [filteredCharacters, setFilteredCharacters] =
    useState<Character[]>(characters);

  const handleFilter = (filters: any) => {
    const { status, gender } = filters;

    if (status == "Status" || gender == "Gender") return

    const filtered = characters?.filter((character) => {
      const isStatusMatch = status
        ? character.status.toLowerCase() === status.toLowerCase()
        : true;
      const isGenderMatch = gender
        ? character.gender.toLowerCase() === gender.toLowerCase()
        : true;

      return isStatusMatch && isGenderMatch;
    });

    setFilteredCharacters(filtered);
  };

  return (
    <div>
        <Filter onFilter={handleFilter} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            filteredCharacters.map((character: Character) => (
              <Card character={character} key={character.id} />
            ))
          }
        </div>
    </div>
  )
}

export default CharacterList