import { Params } from 'react-router-dom';
import { getCocktailbyId } from '../services/cocktailsAPI';
import data from '../data/popularCocktails.json';
import { CocktailType } from '../types/cocktailsTypes';

export const homeLoader = async () => {
    try {
        const popularCocktails: CocktailType[] = [];

        for (const cocktail of data) {
            let popularCocktail = await getCocktailbyId(cocktail.id);
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

        const cocktail = await getCocktailbyId(cocktailId);

        return { cocktail };
    } catch (error) {
        throw new Error('Error loading cocktail');
    }
};
