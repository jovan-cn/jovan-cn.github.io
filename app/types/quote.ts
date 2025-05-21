import { BaseMatter } from ".";


export interface IQuoteMatter extends BaseMatter {
  author: string,
  avatar?: string,
}

export interface IQuote {
  meta: IQuoteMatter,
  content: string,
}