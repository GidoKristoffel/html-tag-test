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
      ua: 'Визначає текст як абревіатуру',
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
      ru: 'Определяет встроенный апплет',
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
  [ETag.Basefont]: {
    question: {
      en: 'Sets the default font',
      ua: 'Задає шрифт за замовчуванням',
      ru: 'Задает шрифт по умолчанию',
    },
    answer: ETag.Basefont,
  },
  [ETag.Bdo]: {
    question: {
      en: 'Changes the direction of the text',
      ua: 'Змінює напрямок тексту',
      ru: 'Изменет направление текста',
    },
    answer: ETag.Bdo,
  },
  [ETag.Big]: {
    question: {
      en: 'Makes the text bigger',
      ua: 'Робить текст більшим',
      ru: 'Делает текст больше',
    },
    answer: ETag.Big,
  },
  [ETag.Blockquote]: {
    question: {
      en: 'A long quote',
      ua: 'Довга цитата',
      ru: 'Длинная цитата',
    },
    answer: ETag.Blockquote,
  },
  [ETag.Body]: {
    question: {
      en: 'Defines the boundaries of the body of the web page',
      ua: 'Визначає кордоти тіла веб-сторінки',
      ru: 'Определение границ тела веб-страницы',
    },
    answer: ETag.Body,
  },
  [ETag.Br]: {
    question: {
      en: 'Creates a new line break',
      ua: 'Створює перехід на новий рядок',
      ru: 'Создает переход на новую строчку',
    },
    answer: ETag.Br,
  },
  [ETag.Button]: {
    question: {
      en: 'Defines a button',
      ua: 'Визначає кнопку',
      ru: 'Определяет кнопку',
    },
    answer: ETag.Button,
  },
  [ETag.Canvas]: {
    question: {
      en: 'Used as a container for graphics',
      ua: 'Використовується як контейнер для графіки',
      ru: 'Используется в качестве контейнера для графики',
    },
    answer: ETag.Canvas,
  },
  [ETag.Caption]: {
    question: {
      en: 'Defines the name of the table',
      ua: 'Визначає назву таблиці',
      ru: 'Определяет название таблицы',
    },
    answer: ETag.Caption,
  },
  [ETag.Center]: {
    question: {
      en: 'Aligns the text to the center',
      ua: 'Вирівнює текст по центру',
      ru: 'Выравнивает текст по центру',
    },
    answer: ETag.Center,
  },
  [ETag.Cite]: {
    question: {
      en: 'Defines the title of the work',
      ua: 'Визначає назву твору',
      ru: 'Определяет название произведения',
    },
    answer: ETag.Cite,
  },
  [ETag.Code]: {
    question: {
      en: 'Indicates that the content of the tag is program code',
      ua: 'Вказує, що зміст теґа - програмний код',
      ru: 'Указывает, что содержание тэга – программный код',
    },
    answer: ETag.Code,
  },
  [ETag.Col]: {
    question: {
      en: 'Sets general properties for one or more columns',
      ua: 'Задає загальні властивості для однієї чи декількох колонок',
      ru: 'Задает общие свойства для одной или нескольких колонок',
    },
    answer: ETag.Col,
  },
  [ETag.Colgroup]: {
    question: {
      en: 'Sets general properties for one or more columns',
      ua: 'Задає загальні властивості для однієї чи декількох колонок',
      ru: 'Задает общие свойства для одной или нескольких колонок',
    },
    answer: ETag.Colgroup,
  },
  // [ETag.]: {
  //   question: {
  //     en: '',
  //     ua: '',
  //     ru: '',
  //   },
  //   answer: ETag.,
  // },
};
