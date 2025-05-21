import { BaseMatter, Lang, OuterLink } from ".";

export interface IPortfolioFrontMatter extends BaseMatter {
  title:        string,
  cover?:       string,
  desc:         string,
  language:     Lang[],
  links:        OuterLink[],
}

export interface IPortfolio {
  meta: IPortfolioFrontMatter,
  content: string,
}