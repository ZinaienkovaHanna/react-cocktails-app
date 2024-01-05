import { FC } from 'react';
import { useLoaderData } from 'react-router';
import Search from '../components/Search';
import CocktailList from '../components/CocktailList';
import data from '../data/autocompleteIngredients.json';
import { CocktailByIngredientType } from '../types/cocktailsTypes';

const Ingredients: FC = () => {
    const { cocktailsByIngredient, searchByIngredientValue } =
        useLoaderData() as {
            cocktailsByIngredient: CocktailByIngredientType[];
            searchByIngredientValue: string;
        };

    return (
        <>
            <Search
                path="ingredients"
                placeholder="Search by ingredients..."
                autocompleteData={data}
            />
            <CocktailList
                cocktails={cocktailsByIngredient}
                title={searchByIngredientValue}
            />
        </>
    );
};

export default Ingredients;
