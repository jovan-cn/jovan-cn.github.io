import { BaseMatter } from ".";

export interface IArticleFrontMatter extends BaseMatter {
  title:        string,
  abstract:     string,
  author?:      string,
  cover?:       string | undefined,
  tags?:        string[],
};

export interface IArticle {
  meta:       IArticleFrontMatter,
  content:      string | undefined,
};