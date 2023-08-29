import { ETag, ITags } from "../app/interfaces/tags.interface";

export const tags: ITags = {
  [ETag.Comment]: {
    question: {
      en: 'A comment',
      ua: 'Коментар',
      ru: 'Комментарий',
    },
    answer: ETag.Comment,
  },
  [ETag.Doctype]: {
    question: {
      en: 'Specifies the document type',
      ua: 'Визначає тип документа',
      ru: 'Определяет тип документа',
    },
    answer: ETag.Doctype,
  },
  [ETag.A]: {
    question: {
      en: 'Link, hyperlink, anchor',
      ua: 'Посилання, гіперпосилання, якір',
      ru: 'Ссылка, гиперссылка, якорь',
    },
    answer: ETag.A,
  },
  [ETag.Abbr]: {
    question: {
      en: 'Defines text as an abbreviation',
      ua: 'Посилання, гіперпосилання, якір',
      ru: 'Определяет текст как аббревиатуру',
    },
    answer: ETag.Abbr,
  },
};
