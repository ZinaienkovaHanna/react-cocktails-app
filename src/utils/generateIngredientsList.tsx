import { IngredientType } from '../types/cocktailsTypes';

export const generateIngredientsList = (ingredients: IngredientType[]) => {
    return ingredients
        .filter((ingredient) => ingredient.name !== null)
        .map((ingredient, index) => (
            <li key={index}>{`${ingredient.name}: ${
                ingredient.measure !== null ? ingredient.measure : 'pinch'
            }`}</li>
        ));
};
