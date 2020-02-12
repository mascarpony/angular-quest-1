export interface Hero {
  firstname: string;
  lastname: string;
  level: number;
  status?: string;
  contacts: string[];
  survey: Array<{ question: string; answer: string }>;
}
