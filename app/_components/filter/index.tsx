import { useState } from "react";
import { Character } from "../../types/character";

interface FilterProps {
  onFilter: (filters: {
    status: Character["status"] | "";
    gender: Character["gender"] | "";
  }) => void;
}

function Filter({ onFilter }: FilterProps) {
  const [status, setStatus] = useState<Character["status"] | "">("");
  const [gender, setGender] = useState<Character["gender"] | "">("");

  const handleFilterChange = () => {
    onFilter({ status, gender });
  };

  return (
    <div className="flex gap-4 mb-4 justify-center mt-7">
      <select
        onChange={(e) => setStatus(e.target.value as Character["status"] | "")}
        value={status}
        className="p-2 border text-[#97ce4c]"
      >
        <option value="">Status</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      <select
        onChange={(e) => setGender(e.target.value as Character["gender"] | "")}
        value={gender}
        className="p-2 border text-[#97ce4c]"
      >
        <option value="">Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>

      <button
        onClick={handleFilterChange}
        className="p-2 bg-[#97ce4c] text-white"
      >
        Apply Filters
      </button>
    </div>
  );
}

export default Filter;
