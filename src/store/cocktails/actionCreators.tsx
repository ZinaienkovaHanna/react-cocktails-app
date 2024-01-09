import { CocktailActionTypes } from './actionTypes';
import { CocktailType } from '../../types/cocktailsTypes';

export const addCocktailAction = (cocktail: CocktailType) => {
    return {
        type: CocktailActionTypes.ADD_COCKTAIL,
        payload: cocktail,
    };
};

export const deleteCocktailAction = (id: string) => {
    return {
        type: CocktailActionTypes.DELETE_COCKTAIL,
        payload: id,
    };
};
