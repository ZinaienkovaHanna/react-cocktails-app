import { CocktailType } from '../../types/cocktailsTypes';

export enum CocktailActionTypes {
    ADD_COCKTAIL = 'ADD_COCKTAIL',
    DELETE_COCKTAIL = 'DELETE_COCKTAIL',
}

interface AddCocktailAction {
    type: CocktailActionTypes.ADD_COCKTAIL;
    payload: CocktailType;
}

interface DeleteCocktailAction {
    type: CocktailActionTypes.DELETE_COCKTAIL;
    payload: string;
}

export type CocktailAction = AddCocktailAction | DeleteCocktailAction;
