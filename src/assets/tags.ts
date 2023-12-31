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
  [ETag.Datalist]: {
    question: {
      en: 'Used to define predefined options to choose from when you type in a text field',
      ua: 'Використовується для визначення наперед визначених варіантів на вибір при введенні в текстовому полі',
      ru: 'Используется для определения предопределенных вариантов на выбор при вводе в текстовом поле',
    },
    answer: ETag.Datalist,
  },
  [ETag.Dd]: {
    question: {
      en: 'Defines the description of a term from a <dt> tag in a list of <dl> terms',
      ua: 'Визначає опис терміна з тега <dt> у списку термінів <dl>',
      ru: 'Определяет описание термина из тега <dt> в списке терминов <dl>',
    },
    answer: ETag.Dd,
  },
  [ETag.Del]: {
    question: {
      en: 'Text that has been removed in the new version of the document',
      ua: 'Текст видалений у новій версії документ',
      ru: 'Текст, который удален в новой версии документ',
    },
    answer: ETag.Del,
  },
  [ETag.Details]: {
    question: {
      en: 'Defines the content that the user can hide or display',
      ua: 'Визначає контент котрий користувач може приховати чи відобразити',
      ru: 'Определяет контент, который пользователь может скрыть или отобразить',
    },
    answer: ETag.Details,
  },
  [ETag.Dfn]: {
    question: {
      en: 'Indicates a term in the text',
      ua: 'Позначає термін в тексті',
      ru: 'Указывает термин в тексте',
    },
    answer: ETag.Dfn,
  },
  [ETag.Dialog]: {
    question: {
      en: 'Створює діалогове вікно',
      ua: 'Створює діалогове вікно',
      ru: 'Создает диалоговое окно',
    },
    answer: ETag.Dialog,
  },
  [ETag.Dir]: {
    question: {
      en: 'List of directory names',
      ua: 'Список з назв директорій',
      ru: 'Список названий директорий',
    },
    answer: ETag.Dir,
  },
  [ETag.Div]: {
    question: {
      en: 'Block',
      ua: 'Блок',
      ru: 'Блок',
    },
    answer: ETag.Div,
  },
  [ETag.Dl]: {
    question: {
      en: 'List of terms/definitions',
      ua: 'Список термінів/визначень',
      ru: 'Список терминов/определений',
    },
    answer: ETag.Dl,
  },
  [ETag.Dt]: {
    question: {
      en: 'Specifies the name of the term',
      ua: 'Задає назву терміна',
      ru: 'Задает название термина',
    },
    answer: ETag.Dt,
  },
  [ETag.Em]: {
    question: {
      en: 'Emphasizes respect in the text',
      ua: 'Акцентує увагу на тексті',
      ru: 'Акцентирует внимание на тексте',
    },
    answer: ETag.Em,
  },
  [ETag.Embed]: {
    question: {
      en: 'Inserts an external object into an HTML document',
      ua: 'Вставляє в html-документ зовнішній об\'єкт',
      ru: 'Вставляет в html-документ внешний объект',
    },
    answer: ETag.Embed,
  },
  [ETag.Fieldset]: {
    question: {
      en: 'Groups related form fields',
      ua: 'Групує пов\'язані поля форми',
      ru: 'Группирует связанные поля формы',
    },
    answer: ETag.Fieldset,
  },
  [ETag.Figcaption]: {
    question: {
      en: 'Caption for the picture',
      ua: 'Підпис до малюнка',
      ru: 'Подпись к рисунку',
    },
    answer: ETag.Figcaption,
  },
  [ETag.Figure]: {
    question: {
      en: 'Grouping of elements',
      ua: 'Групування елементів',
      ru: 'Группировка элементов',
    },
    answer: ETag.Figure,
  },
  [ETag.Font]: {
    question: {
      en: 'Sets the color, size and type of the font',
      ua: 'Задає колір, розмір і тип шрифту',
      ru: 'Задает цвет, размер и тип шрифта',
    },
    answer: ETag.Font,
  },
  [ETag.Footer]: {
    question: {
      en: 'Defines the footer (basement) of a web page',
      ua: 'Визначає футер (підвал) веб-сторінки',
      ru: 'Определяет футер (подвал) веб-страницы',
    },
    answer: ETag.Footer,
  },
  [ETag.Form]: {
    question: {
      en: 'Defines the form',
      ua: 'Визначає форму',
      ru: 'Определение формы',
    },
    answer: ETag.Form,
  },
  [ETag.Frame]: {
    question: {
      en: 'Defines a frame on a web page',
      ua: 'Визначає фрейм на веб-сторінці',
      ru: 'Определяет фрейм на веб-странице',
    },
    answer: ETag.Frame,
  },
  [ETag.Frameset]: {
    question: {
      en: 'Defines the frame structure',
      ua: 'Визначає структуру фреймів',
      ru: 'Определение структуры кадров',
    },
    answer: ETag.Frameset,
  },
  [ETag.H1]: {
    question: {
      en: 'First level header',
      ua: 'Заголовок першого рівня',
      ru: 'Заголовок первого уровня',
    },
    answer: ETag.H1,
  },
  [ETag.H2]: {
    question: {
      en: 'Second level header',
      ua: 'Заголовок другого рівня',
      ru: 'Заголовок второго уровня',
    },
    answer: ETag.H2,
  },
  [ETag.H3]: {
    question: {
      en: 'Third level header',
      ua: 'Заголовок третього рівня',
      ru: 'Заголовок третьего уровня',
    },
    answer: ETag.H3,
  },
  [ETag.H4]: {
    question: {
      en: 'Fourth level title',
      ua: 'Заголовок четвертого рівня',
      ru: 'Заголовок четвертого уровня',
    },
    answer: ETag.H4,
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
