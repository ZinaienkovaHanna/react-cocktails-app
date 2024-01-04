export interface IngredientType {
    name: string | null;
    measure: string | null;
}

export interface CocktailType {
    id: string;
    name: string;
    category: string | null;
    alcoholic: string | null;
    glass: string | null;
    instructions: string;
    image: string;
    ingredients: IngredientType[];
}

export interface CocktailAPIType {
    idDrink: string;
    strDrink: string;
    strCategory: string | null;
    strAlcoholic: string | null;
    strGlass: string | null;
    strInstructions: string;
    strDrinkThumb: string;
    strIngredient1: string | null;
    strMeasure1: string | null;
    strIngredient2: string | null;
    strMeasure2: string | null;
    strIngredient3: string | null;
    strMeasure3: string | null;
    strIngredient4: string | null;
    strMeasure4: string | null;
    strIngredient5: string | null;
    strMeasure5: string | null;
    strIngredient6: string | null;
    strMeasure6: string | null;
    strIngredient7: string | null;
    strMeasure7: string | null;
    strIngredient8: string | null;
    strMeasure8: string | null;
    strIngredient9: string | null;
    strMeasure9: string | null;
    strIngredient10: string | null;
    strMeasure10: string | null;
}

export interface CocktailByIngredientType {
    id: string;
    name: string;
    image: string;
}

export interface CocktailByIngredientAPIType {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
}
