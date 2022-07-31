import { useState } from "react";
import babyNameData from "./babyNamesData.json";
import { matchSearchedTerm } from "./matchSearchedTerm";

export interface babyNamesData {
  id: number;
  name: string;
  sex: string;
}

export function BabyNamesStore(): JSX.Element {
  const sortedBabyNameData: babyNamesData[] = [...babyNameData].sort((a, b) =>
    a.name > b.name ? 1 : -1
  );
  //const favesList: babyNamesData[]=[];
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [faveNames, setFaveName] = useState<babyNamesData[]>([]);
  //console.log("this is faveNames after rendering", faveNames)

  const filteredBabyNames = matchSearchedTerm(sortedBabyNameData, searchTerm);

  function handleAddToFaves(baby: babyNamesData) {
    const newFavesList = [...faveNames, baby];
    setFaveName(newFavesList);
    console.log(faveNames);
  }
  return (
    <>
      <h1 className="title">Baby Names</h1>
      <div>
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder="type here"
        ></input>
      </div>
      <div className="filter">
        <h2>Favourites</h2>
        {faveNames.map((baby) => {
          return (
            <button
              key={baby.id}
              className={baby.sex === "f" ? "female" : "male"}
            >
              {baby.name}
            </button>
          );
        })}
      </div>
      <div className="main-baby-list">
        <h2>Main List</h2>
        {filteredBabyNames.map((baby) => (
          <button
            key={baby.id}
            className={baby.sex === "f" ? "female" : "male"}
            onClick={() => handleAddToFaves(baby)}
          >
            {baby.name}
          </button>
        ))}
      </div>
    </>
  );
}
