import { useState } from "react";
import babyNameData from "./babyNamesData.json";

interface babyNamesData{
  id: number;
  name:string;
  sex: string;

}

export function BabyNamesStore(): JSX.Element {
  const sortedBabyNameData :babyNamesData[]= [...babyNameData].sort((a, b) =>
    a.name > b.name ? 1 : -1
  );
  const [searchTerm, setSearchTerm] = useState<string>("");
  
 function handleChangeToInput(event:any){
  setSearchTerm(event.target.value)
 }

 function matchSearchedTerm(
  babyData: babyNamesData[], searchValue:string):babyNamesData[]{
  function callBackFunc(oneBabyName:babyNamesData):boolean{
   return oneBabyName.name.toLowerCase().includes(searchValue.toLowerCase())
  } 
  return babyData.filter(callBackFunc)
 }
  const filteredBabyNames = matchSearchedTerm(sortedBabyNameData, searchTerm);
  return (
    <>
      <h1 className="title">Baby Names</h1>
      <div>
        <input type= "text" onChange={handleChangeToInput} value={searchTerm} placeholder="type here"></input>
      </div>
      {filteredBabyNames.map((baby) => {
        return (
          <button
            key={baby.id}
            className={baby.sex === "f" ? "female" : "male"}
          >
            {baby.name}
          </button>
        );
      })}
    </>
  );
}
// <div className={...(condition ? { className: 'on' } : {})}>
