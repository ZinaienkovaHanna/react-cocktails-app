import { CocktailActionTypes } from './actionTypes';
import { CocktailType } from '../../types/cocktailsTypes';

interface CocktailsStateType {
    cocktails: CocktailType[];
}

const initialState: CocktailsStateType = {
    cocktails: [],
};

const cocktailsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CocktailActionTypes.ADD_COCKTAIL:
            return {
                ...state,
                cocktails: [...state.cocktails, action.payload],
            };
        case CocktailActionTypes.DELETE_COCKTAIL:
            return {
                ...state,
                cocktails: state.cocktails.filter(
                    (cocktail) => cocktail.id !== action.payload
                ),
            };
        default:
            return state;
    }
};

export default cocktailsReducer;
