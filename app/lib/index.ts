import path from "path";

export const LocalStorageKey = (key: string) => {
  return "JovanHomepage-" + key;
}

export const DynamicPath = (r: string[]) => {
  return (path.join(...r));
}