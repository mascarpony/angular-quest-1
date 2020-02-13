export default class Hero {
  name: string;
  lastName: string;
  age: number;
  avatar: string;
  contacts: Array<{ type: string; value: string }>;
  questionary: Array<{ question: string; answer: string }>;
}
