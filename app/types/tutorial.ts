import { BaseMatter } from ".";

export interface ITutorialFrontMatter extends BaseMatter {
  title:        string,
  abstract:     string,
  author?:      string,
  cover?:       string | undefined,
  tags?:        string[],
};

export interface ITutorial {
  meta:     ITutorialFrontMatter,
  content:  string | undefined,
};
