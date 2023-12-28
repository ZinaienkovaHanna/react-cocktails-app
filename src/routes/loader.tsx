import { getCocktailbyId } from '../services/cocktailsAPI';
import data from '../data/popularCocktails.json';
import { CocktailType } from '../types/cocktailsTypes';

export const homeLoader = async () => {
    try {
        const popularCocktails: CocktailType[] = [];

        for (const cocktail of data) {
            let popularCocktail = await getCocktailbyId(cocktail.id);
            popularCocktails.push(popularCocktail);
        }

        return { popularCocktails };
    } catch (error) {
        throw new Error('Error loading home data');
    }
};
