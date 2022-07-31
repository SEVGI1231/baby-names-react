import { babyNamesData } from "./babyNames";

export function matchSearchedTerm(
  babyData: babyNamesData[],
  searchValue: string
): babyNamesData[] {
  function callBackFunc(oneBabyName: babyNamesData): boolean {
    return oneBabyName.name.toLowerCase().includes(searchValue.toLowerCase());
  }
  return babyData.filter(callBackFunc);
}
