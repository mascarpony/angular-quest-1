import Hero from '../../shared/models/hero.model';

const hero: Hero = {
  name: 'Narek',
  lastName: 'Avagian',
  age: 22,
  avatar: './assets/avatar.png',
  contacts: {
    phone: 'tel: +7 (999) 246-85-15',
    mail: 'mailto: narek_avagian@epam.com',
    github: 'https://drednes.github.io'
  },
  questionary: [{
    question: 'How good are you at thinking up questions about yourself?',
    answer: 'Hm, i\'m probably the best'
  },
  {
    question: 'Why there are only 4 questions here?',
    answer: 'First answer is not truth'
  },
  {
    question: 'What is your name?',
    answer: 'Narek.'
  },
  {
    question: 'Are you serios? Really that question? You couldn\'t do it better and write more interesting questions?',
    answer: 'It\'s still question about myself too! 🤪'
  }],
};

export default hero;
