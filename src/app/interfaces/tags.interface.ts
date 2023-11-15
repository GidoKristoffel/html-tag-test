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
  Basefont = '<basefont>',
  Bdo = '<bdo>',
  Big = '<big>',
  Blockquote = '<blockquote>',
  Body = '<body>',
  Br = '<br>',
  Button = '<button>',
  Canvas = '<canvas>',
  Caption = '<caption>',
  Center = '<center>',
  Cite = '<cite>',
  Code = '<code>',
  Col = '<col>',
  Colgroup = '<colgroup>',
  Datalist = '<datalist>',
  Dd = '<dd>',
  Del = '<del>',
  Details = '<details>',
  Dfn = '<dfn>',
  Dialog = '<dialog>',
  Dir = '<dir>',
  Div = '<div>',
  Dl = '<dl>',
  Dt = '<dt>',
  Em = '<em>',
  Embed = '<embed>',
  Fieldset = '<fieldset>',
  Figcaption = '<figcaption>',
  Figure = '<figure>',
  Font = '<font>',
  Footer = '<footer>',
  Form = '<form>',
  // Frame = '<frame>',
  // Frameset = '<frameset>',
  // H1 = '<h1>',
  // H2 = '<h2>',
  // H3 = '<h3>',
  // H4 = '<h4>',
  // H5 = '<h5>',
  // H6 = '<h6>',
  // Head = '<head>',
  // Header = '<header>',
  // Hgroup = '<hgroup>',
  // Hr = '<hr>',
  // Html = '<html>',
  // I = '<i>',
  // Iframe = '<iframe>',
  // Img = '<img>',
  // Input = '<input>',
  // Ins = '<ins>',
  // Kbd = '<kbd>',
  // Ieygen = '<keygen>',
  // Iabel = '<label>',
  // Legend = '<legend>',
  // Ii = '<li>',
  // Link = '<link>',
  // Main = '<main>',
  // Map = '<map>',
  // Mark = '<mark>',
  // Menu = '<menu>',
  // Menuitem = '<menuitem>',
  // Meta = '<meta>',
  // Meter = '<meter>',
  // Nav = '<nav>',
  // Noscript = '<noscript>',
  // Object = '<object>',
  // Ol = '<ol>',
  // Optgroup = '<optgroup>',
  // Option = '<option>',
  // Output = '<output>',
  // P = '<p>',
  // Param = '<param>',
  // Picture = '<picture>',
  // Pre = '<pre>',
  // Progress = '<progress>',
  // Q = '<q>',
  // Rp = '<rp>',
  // Rt = '<rt>',
  // Ruby = '<ruby>',
  // S = '<s>',
  // Samp = '<samp>',
  // Script = '<script>',
  // Section = '<section>',
  // Select = '<select>',
  // Small = '<small>',
  // Source = '<source>',
  // Span = '<span>',
  // Strike = '<strike>',
  // Strong = '<strong>',
  // Style = '<style>',
  // Sub = '<sub>',
  // Summary = '<summary>',
  // Sup = '<sup>',
  // Table = '<table>',
  // Tbody = '<tbody>',
  // Textarea = '<textarea>',
  // Tfoot = '<tfoot>',
  // Th = '<th>',
  // Thead = '<thead>',
  // Time = '<time>',
  // Title = '<title>',
  // Tr = '<tr>',
  // Track = '<track>',
  // Tt = '<tt>',
  // U = '<u>',
  // Ul = '<ul>',
  // Var = '<var>',
  // Video = '<video>',
  // Wbr = '<wbr>',
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

export enum ELocalStorage {
  QuestionOrder = 'question-order',
  QuestionNumber = 'question-number',
  RightAnswers = 'right-answers',
  WrongAnswers = 'wrong-answers',
  UserAnswers = 'user-answers',
  ShowStatistics = 'show-statistics',
  SkippedQuestions = 'skipped-questions',
  TestResult = 'test-result',
  CurrentPage = 'current-page',
  Language = 'language',
}

export enum EDialog {
  Reset = 'reset',
  BackToMainMenu = 'back-to-main-menu',
}

export interface IDialog {
  answer: string;
  agreeLabel: string;
  disagreeLabel: string;
}

export type TDialogs =  {
  [key in EDialog]: IDialog;
}

export interface ITestResultStatistics {
  rightAnswers: number;
  wrongAnswers: number;
  skippedQuestions: number;
  totalQuestions: number;
}

export type TUserAnswers = {
  [key in ETag]: string;
};

export enum ETestResultCategories {
  RightAnswers = 'right-answers',
  WrongAnswers = 'wrong-answers',
  SkippedAnswers = 'skipped-answers',
  TotalQuestions = 'total-questions',
}

export enum ETestResultStatus {
  RightAnswer = 'right-answer',
  WrongAnswer = 'wrong-answer',
  SkippedAnswer = 'skipped-answer',
}

export interface ITestResultsAnswers {
  question: {
    en: string;
    ua: string;
    ru: string;
  },
  trueAnswer: ETag;
  userAnswer: string;
  status: ETestResultStatus;
}

export interface ISavedResults {
  statistics: ITestResultStatistics;
  answers: ITestResultsAnswers[];
}

export interface ICounter {
  name: string;
  value: number;
  className: string;
}

export interface ICounters {
  totalQuestions: ICounter;
  questionsLeft: ICounter;
  correctAnswer: ICounter;
  incorrectAnswer: ICounter;
  skippedQuestions: ICounter;
}

export interface IMenu {
  label: string;
  icon: string;
  action: () => void;
}

export enum EPages {
  MainMenu = 'main-menu',
  Dictionary = 'dictionary',
  Test = 'test',
  Result = 'result',
}

export enum ELang {
  English = 'en',
  Ukrainian = 'ua',
  Russian = 'ru',
}

export interface IStatisticTab {
  name: ETestResultCategories;
  label: string;
  statKey: keyof ITestResultStatistics;
}
