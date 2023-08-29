export enum ETag {
  Comment = 'comment',
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
