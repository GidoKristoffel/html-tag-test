import { ETag, ITags } from "../app/interfaces/tags.interface";

export const tags: ITags = {
  [ETag.Comment]: {
    question: {
      en: 'A comment',
      ua: 'Коментар',
      ru: 'Комментарий',
    },
    answer: ETag.Comment
  },
};
