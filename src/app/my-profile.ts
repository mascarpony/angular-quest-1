export interface IMyProfile {
    name: string,
    age:number,
    questionnaire?: IQuestion[],
}

export interface IQuestion {
    question: string,
    answer: string,

}