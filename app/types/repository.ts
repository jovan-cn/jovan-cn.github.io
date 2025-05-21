import { BaseMatter, Lang, License, OuterLink } from ".";

export interface IRepositoryFrontMatter extends BaseMatter {
  title:        string,
  author:       string,
  avatar?:      string | undefined,
  desc?:        string | undefined,
  cover?:       string | undefined,
  language:     Lang[],
  license:      License,
  links:        OuterLink[],
};


export interface IRepository {
  meta:     IRepositoryFrontMatter,
  content:  string;
}