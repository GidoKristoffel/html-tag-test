export enum ETag {
  Comment = '<!--...-->',
  Doctype = '<!DOCTYPE>',
  A = '<a>',
  Abbr = '<abbr>',
  Address = '<address>',
  Applet = '<applet>',
  Area = '<area>',
  Article = '<article>',
  Aside = '<aside>',
  Audio = '<audio>',
  B = '<b>',
  Base = '<base>',
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
