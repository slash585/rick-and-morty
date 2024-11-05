"use client";

import { useState } from "react";
import { Character } from "../../types/character";
import Filter from "../filter";

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

  console.log(filteredCharacters)


  return (
    <div>
        <Filter onFilter={handleFilter} />
    </div>
  )
}

export default CharacterList