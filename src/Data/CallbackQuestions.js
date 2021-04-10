export const callbackQuestions = [
  {
    questionText: "Какой курс вас интересует?",
    answerOptions: [
      { answerText: "IELTS ", isCorrect: false, isSelected: false },
      { answerText: "NUFYPET", isCorrect: false, isSelected: false },
      { answerText: "SAT", isCorrect: false, isSelected: false },
      { answerText: "Английский язык", isCorrect: false, isSelected: false },
    ],
  },
  {
    questionText: "Как вас зовут?",
    answerOptions: [
      {
        placeholder: "Введите ваше имя",
        isCorrect: true,
        isSelected: false,
        isInput: true,
        type: "text",
        field: "name",
      },
    ],
  },
  {
    questionText: "Из какого вы города?",
    answerOptions: [
      { answerText: "Нур-Султан", isCorrect: true, isSelected: false },
      { answerText: "Алматы", isCorrect: false, isSelected: false },
      { answerText: "Атырау", isCorrect: false, isSelected: false },
      { answerText: "Актобе", isCorrect: false, isSelected: false },
      {
        placeholder: "Другой",
        isCorrect: false,
        isSelected: false,
        isInput: true,
        field: "city",
      },
    ],
  },

  {
    questionText: "В каком вы классе?",
    answerOptions: [
      { answerText: "9", isCorrect: true, isSelected: false },
      { answerText: "10", isCorrect: false, isSelected: false },
      { answerText: "11", isCorrect: false, isSelected: false },
      {
        placeholder: "Другое",
        isCorrect: false,
        isSelected: false,
        isInput: true,
        field: "year",
      },
    ],
  },
  {
    questionText: "Вы сдавали IELTS / TEOFL?",
    answerOptions: [
      { answerText: "Да ", isCorrect: false, isSelected: false },
      { answerText: "Нет", isCorrect: true, isSelected: false },
      { answerText: "Скоро собираюсь", isCorrect: false, isSelected: false },
      {
        placeholder: "Другое",
        isCorrect: false,
        isSelected: false,
        isInput: true,
        type: "text",
        field: "passedTest",
      },
    ],
  },
  {
    questionText: "Какой у вас уровень английского?",
    answerOptions: [
      { answerText: "Elementary", isCorrect: false, isSelected: false },
      {
        answerText: "Pre-Inter / Intermediate",
        isCorrect: false,
        isSelected: false,
      },
      {
        answerText: "Intermediate / Upper",
        isCorrect: true,
        isSelected: false,
      },
      { answerText: "Не знаю", isCorrect: false, isSelected: false },
    ],
  },
  {
    questionText: "В какое время с вами связаться?",
    answerOptions: [
      { answerText: "10.00 - 12.00", isCorrect: false, isSelected: false },
      {
        answerText: "12.00 - 14.00",
        isCorrect: false,
        isSelected: false,
      },
      {
        answerText: "14.00 - 18.00",
        isCorrect: true,
        isSelected: false,
      },
      {
        placeholder: "Другое",
        isCorrect: false,
        isSelected: false,
        isInput: true,
        type: "text",
        field: "time",
      },
    ],
  },
  {
    questionText: "Ваш номер телефона",
    answerOptions: [
      {
        placeholder: "Введите ваш номер",
        isCorrect: true,
        isSelected: false,
        isInput: true,
        type: "tel",
        field: "phone",
      },
    ],
  },
];
