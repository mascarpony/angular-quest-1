export interface IHeroProfile {
  name: string;
  level: number;
  isMale: boolean | null;
  alignment: IAlignment;
  questionnaire?: IQuestion[];
  profilePictureUrl?: string;
}

export interface IAlignment {
  goodOrEvil: GoodOrEvil;
  lawfulOfChaotic: LawfulOfChaotic;
}

export type GoodOrEvil = "Good" | "Neutral" | "Evil";

export type LawfulOfChaotic = "Lawful" | "Neutral" | "Chaotic";

export interface IQuestion {
  question: string;
  answer: string;
}
