export interface Hero {
    firstName: string;
    lastName: string;
    level: number;
    status?: string;
    contacts: string[];
    survey: Array<{ question: StaticRange; answer: string }>;
}