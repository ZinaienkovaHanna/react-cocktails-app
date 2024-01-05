import { Params } from 'react-router-dom';
import {
    getCocktailById,
    getCocktailByName,
    getCocktailsByIngredient,
} from '../services/cocktailsAPI';
import popularCocktailsData from '../data/popularCocktails.json';
import { getBookmarkedKeys } from '../utils/localStorage';
import { CocktailType } from '../types/cocktailsTypes';

export const homeLoader = async () => {
    try {
        const popularCocktails: CocktailType[] = [];

        for (const cocktail of popularCocktailsData) {
            let popularCocktail = await getCocktailById(cocktail.id);
            popularCocktails.push(popularCocktail[0]);
        }

        return { popularCocktails };
    } catch (error) {
        throw new Error('Error loading home data');
    }
};

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

export const cocktailBookmarkedLoader = async () => {
    try {
        const bookmarkedKeys = getBookmarkedKeys();

        console.log(bookmarkedKeys);
        const bookmarkedCocktails = [];

        for (const key of bookmarkedKeys) {
            let bookmarkedCocktail = await getCocktailById(key);
            bookmarkedCocktails.push(bookmarkedCocktail[0]);
        }

        return { bookmarkedCocktails };
    } catch (error) {
        throw new Error('Error loading bookmarked cocktails');
    }
};

console.log(cocktailBookmarkedLoader());
