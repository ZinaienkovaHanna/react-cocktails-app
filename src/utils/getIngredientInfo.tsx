import { IngredientType } from '../types/cocktailsTypes';

export const getIngredientInfo = (ingredients: IngredientType[]) => {
    return ingredients
        .filter(
            (ingredient) => ingredient.name !== null && ingredient.name !== ''
        )
        .map((ingredient) => ingredient.name)
        .join(' + ');
};
