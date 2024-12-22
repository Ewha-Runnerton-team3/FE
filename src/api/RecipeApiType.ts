
export interface Recipe {
    id: number;
    name: string;
    totalTime: string;
    difficulty: string;
    difficultyScore: number;
    ingredients: Ingredient[];
    steps: Step[];
    savedAt: string;
}

export interface Ingredient {
    ingredient: string;
    quantity: string;
}

export interface Step {
    id: number;
    step: string;
}