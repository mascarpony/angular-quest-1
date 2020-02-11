export default class Hero {
  name: string;
  lastName: string;
  age: number;
  avatar: string;
  contacts: {
    phone: string;
    mail: string;
    github: string;
  };
  questionary: Array<{ question: string; answer: string }>;
}
