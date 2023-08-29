export enum ETag {
  Comment = '<!--...-->',
  Doctype = '<!DOCTYPE>',
  A = '<a>',
  Abbr = '<abbr>',
};

export type ITags = {
  [key in ETag]: ITag;
};

export interface ITag {
  question: {
    en: string;
    ua: string;
    ru: string;
  };
  answer: ETag;
}
