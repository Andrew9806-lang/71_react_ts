import { v4 } from "uuid";

import type { JSX } from "react";
import { animalsData } from "./data";
import type { Animal } from "./type";
import AnimalCard from "../../Components/AnimalCard/AnimalCard";

function Homework07() {
  const animals: JSX.Element[] = animalsData.map(
    (animal: Animal): JSX.Element => {
      return (
        <AnimalCard
          key={v4()}
          animalName={animal.name}
          animalSpecies={animal.species}
          animalImg={animal.image}
        />
      );
    }
  );
  return <div className="homework07-wrapper">{animals}</div>;
}

export default Homework07;
