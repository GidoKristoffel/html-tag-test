import { ICounters } from "../interfaces/tags.interface";

export const counters: ICounters = {
  totalQuestions: {
    name: 'Всего вопросов',
    value: 0,
    className: '',
  },
  questionsLeft: {
    name: 'Осталось вопросов',
    value: 0,
    className: '',
  },
  correctAnswer: {
    name: 'Верно',
    value: 0,
    className: 'correct',
  },
  incorrectAnswer: {
    name: 'Не верно',
    value: 0,
    className: 'incorrect',
  },
  skippedQuestions: {
    name: 'Пропущено',
    value: 0,
    className: '',
  }
};
