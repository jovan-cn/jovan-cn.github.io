export type Lang = "C" | "C++" | "Python" | "Golang" | "Typescript" | string;
export type License = "MIT" | "GPL-2.0" | string;

export interface OuterLink {
  text: string,
  url: string,
  icon: string | undefined,
};


// since nextjs cannot transfer Dayjs object between Server components and Client components
// use unix timestamp replace of Dayjs
export interface BaseMatter {
  id:       number, // unique id for dynamic path (maybe db's primary key in the future)
  created:  number, // Dayjs.unix()
  modified: number, // Dayjs.unix()
  accessed: number, // Dayjs.unix()
}

export interface INavItem {
  label: string,
  icon: string,
  to: string,
}


export interface ISocial {
  label: string,
  icon:  string,
  value: string,
}