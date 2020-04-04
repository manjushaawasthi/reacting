import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown.js";

const SearchParams = () => {
  // Prop destructuring -> useState returns 2 items - first, current state and second, the function for updating this state
  // Best practice when using hooks -> Never define hooks under conditional(if, for) statements
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

  // useEffect runs after the render executes
  useEffect(() => {
    // pet.breeds("dog").then(console.log, console.error);

    setBreeds([]);
    setBreed("");
    pet.breeds(animal).then(({ breeds }) => {
      const breedNames = breeds.map(({ name }) => name);
      console.log(breedNames);
      setBreeds(breedNames);
    }, console.error);
  }, [animal, setBreed, setBreeds]); // Define dependencies, run this effect only if one of these dependencies changes.

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <AnimalDropdown />
        <BreedDropdown />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
