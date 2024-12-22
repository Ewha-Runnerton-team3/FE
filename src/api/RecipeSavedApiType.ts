// 저장된 레시피 URL
export const recipeURL = "/recipe/saved";

// 가져오기(조회)
// GET 파라미터
export interface RecipeGetParamsType {
    userId: number;
    receipeId: number;
};

// GET 응답
export interface RecipeGetResponseType {
    recipes: Recipe[];
}

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


////////////////////////////////////////////////////////
// 저장
// POST 파라미터
export interface RecipePostParamsType {
};

// POST 요청
export interface RecipePostRequestType {
    userId: number;
    recipeId: number;
}

// POST 응답:  백엔드로부터 받을 데이터
export interface RecipePostResponseType {
    id: number;
    userId: number;
    recipeId: number;
    createdAt: string;
    updatedAt: string;
}


////////////////////////////////////////////////////////
// 삭제
// DELETE 파라미터
export interface RecipeDeleteParamsType {
    userId: number;
    recipeId: number;
}

// DELETE 응답:  null 값을 응답받음