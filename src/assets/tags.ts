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
  [ETag.Address]: {
    question: {
      en: 'Contact information of the author or owner of the document',
      ua: 'Контактна інформація автора чи власника документа',
      ru: 'Контактная информация автора или владельца документа',
    },
    answer: ETag.Address,
  },
  [ETag.Applet]: {
    question: {
      en: 'Specify the awakening applet',
      ua: 'Визначає вбудований аплет',
      ru: 'Визначае вбудований аплет',
    },
    answer: ETag.Applet,
  },
  [ETag.Area]: {
    question: {
      en: 'A tag that designates an interactive area in the image map (the <map> element), so that when you click on the name, the image area is shown',
      ua: 'Тег, який визначає інтерактивну область в зображенні-карті (елемент <map>), тобто при кліці на певну область зображення відбуваються',
      ru: 'Тег, определяющий интерактивную область в изображении-карте (элемент <map>), то есть при клике на определенную область изображения происходят',
    },
    answer: ETag.Area,
  },
  [ETag.Article]: {
    question: {
      en: 'Defines independent, self-sufficient content from the rest of the site',
      ua: 'Визначає незалежний, самодостатній зміст від іншої частини сайту',
      ru: 'Определение независимого, самодостаточного содержания от другой части сайта',
    },
    answer: ETag.Article,
  },
  [ETag.Aside]: {
    question: {
      en: 'Block with additional information',
      ua: 'Блок з додатковою інформацією',
      ru: 'Блок с дополнительной информацией',
    },
    answer: ETag.Aside,
  },
  [ETag.Audio]: {
    question: {
      en: 'Allows you to insert a playable audio file',
      ua: 'Дозволяє вставити аудіо файл, що відтворюється',
      ru: 'Позволяет вставить воспроизводимый аудио файл',
    },
    answer: ETag.Audio,
  },
  [ETag.B]: {
    question: {
      en: 'Makes the text bold',
      ua: 'Робить текст жирним',
      ru: 'Делает текст жирным',
    },
    answer: ETag.B,
  },
  [ETag.Base]: {
    question: {
      en: 'Changes the absolute path of the page',
      ua: 'Змінює абсолютний шлях сторінки',
      ru: 'Изменяет абсолютный путь страницы',
    },
    answer: ETag.Base,
  },

};
