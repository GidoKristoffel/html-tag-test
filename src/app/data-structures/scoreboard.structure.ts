import { ICounters } from "../interfaces/tags.interface";

export const counters: ICounters = {
  totalQuestions: {
    name: 'statistics.total-questions',
    value: 0,
    className: '',
  },
  questionsLeft: {
    name: 'statistics.questions-left',
    value: 0,
    className: '',
  },
  correctAnswer: {
    name: 'statistics.correct-answer',
    value: 0,
    className: 'correct',
  },
  incorrectAnswer: {
    name: 'statistics.incorrect-answer',
    value: 0,
    className: 'incorrect',
  },
  skippedQuestions: {
    name: 'statistics.skipped-questions',
    value: 0,
    className: 'skipped',
  }
};
