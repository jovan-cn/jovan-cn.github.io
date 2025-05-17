export type Lang = "C" | "C++" | "Python" | "Golang" | "Typescript";
export type License = "MIT" | "GPL-2.0" | string;

export interface IRepository {
  title: string,
  author: string,
  avatar: string | undefined,
  desc: string | undefined,
  cover: string | undefined,
  language: Lang[],
  license: License,
  evaluate: string | undefined,
  create_time: number,
  uptate_time: number,
}