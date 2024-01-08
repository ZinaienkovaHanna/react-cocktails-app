import { CocktailType } from '../types/cocktailsTypes';

export const checkingCocktailInMyList = (
    cocktails: CocktailType[],
    id: string
): boolean => {
    return cocktails.some((cocktail) => cocktail.id === id);
};
