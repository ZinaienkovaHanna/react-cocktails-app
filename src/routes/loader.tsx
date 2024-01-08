import { Params } from 'react-router-dom';
import {
    getCocktailById,
    getCocktailByName,
    getCocktailsByIngredient,
} from '../services/cocktailsAPI';

export const cocktailLoader = async ({
    params,
}: {
    params: Params<'cocktailId'>;
}) => {
    try {
        const cocktailId = params.cocktailId;

        if (!cocktailId) {
            throw new Error('Cocktail ID is undefined');
        }

        const cocktail = await getCocktailById(cocktailId);

        return { cocktail };
    } catch (error) {
        throw new Error('Error loading cocktail');
    }
};

export const cocktailSearchLoader = async ({
    params,
}: {
    params: Params<'searchByNameValue'>;
}) => {
    try {
        const searchByNameValue = params.searchByNameValue;

        if (!searchByNameValue) {
            throw new Error('Cocktail value is undefined');
        }

        const cocktailSearchByName = await getCocktailByName(searchByNameValue);

        return { cocktailSearchByName, searchByNameValue };
    } catch (error) {
        throw new Error('Error loading cocktail');
    }
};

export const ingredientSearchLoader = async ({
    params,
}: {
    params: Params<'searchByIngredientValue'>;
}) => {
    try {
        const searchByIngredientValue = params.searchByIngredientValue;

        if (!searchByIngredientValue) {
            throw new Error('Ingredient value is undefined');
        }

        const cocktailsByIngredient = await getCocktailsByIngredient(
            searchByIngredientValue
        );

        return { cocktailsByIngredient, searchByIngredientValue };
    } catch (error) {
        throw new Error('Error loading cocktails');
    }
};
