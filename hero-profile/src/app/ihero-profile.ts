export interface IHeroProfile {
    name: string;
    surname: string;
    nickname: string;
    age: number;
    isMagic: boolean;    
    favoritePhrase: string;
    
    primarySkills?: string[];
    
    factsAboutHero?: string[];
};

