import { CocktailType, CocktailAPIType } from '../types/cocktailsTypes';

const BASE_URL = process.env.REACT_APP_BASE_URL || '';

const serializeCocktail = (cocktail: CocktailAPIType): CocktailType => {
    return {
        id: cocktail.idDrink,
        name: cocktail.strDrink,
        category: cocktail.strCategory,
        alcoholic: cocktail.strAlcoholic,
        glass: cocktail.strGlass,
        instructions: cocktail.strInstructions,
        image: cocktail.strDrinkThumb,
        ingredients: [
            {
                name: cocktail.strIngredient1,
                measure: cocktail.strMeasure1,
            },
            {
                name: cocktail.strIngredient2,
                measure: cocktail.strMeasure2,
            },
            {
                name: cocktail.strIngredient3,
                measure: cocktail.strMeasure3,
            },
            {
                name: cocktail.strIngredient4,
                measure: cocktail.strMeasure4,
            },
            {
                name: cocktail.strIngredient5,
                measure: cocktail.strMeasure5,
            },
            {
                name: cocktail.strIngredient6,
                measure: cocktail.strMeasure6,
            },
            {
                name: cocktail.strIngredient7,
                measure: cocktail.strMeasure7,
            },
            {
                name: cocktail.strIngredient8,
                measure: cocktail.strMeasure8,
            },
            {
                name: cocktail.strIngredient9,
                measure: cocktail.strMeasure9,
            },
            {
                name: cocktail.strIngredient10,
                measure: cocktail.strMeasure10,
            },
        ],
    };
};

const getData = async (path: string) => {
    try {
        const response = await fetch(`${BASE_URL}${path}`);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        return data.drinks;
    } catch (error) {
        throw new Error('Error getting data');
    }
};

export const getCocktailbyId = async (id: string) => {
    try {
        const cocktail = await getData(`/lookup.php?i=${id}`);
        return cocktail.map(serializeCocktail);
    } catch (error) {
        throw new Error('Error getting cocktail');
    }
};
