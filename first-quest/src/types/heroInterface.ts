export default interface Hero {
	firstName: string;
	lastName: string;
	avatarURL: string;
	age: number;
	contacts: contact[];
	questionnaire: question[];
}

type contact = {
	type: string;
	value: string;
	href: string;
}

type question = {
	id: number;
	question: string;
	answer: string;
	isShown: boolean;
	symbol: string;
}