import { FC } from 'react';
import { useLoaderData } from 'react-router';
import CocktailList from '../components/CocktailList';
import Search from '../components/Search';
import data from '../data/autocompleteCocktails.json';
import { CocktailType } from '../types/cocktailsTypes';

const Cocktails: FC = () => {
    const { cocktailSearchByName, searchByNameValue } = useLoaderData() as {
        cocktailSearchByName: CocktailType[];
        searchByNameValue: string;
    };
    return (
        <>
            <Search
                path="cocktails"
                placeholder="Search by name..."
                autocompleteData={data}
            />
            <CocktailList
                cocktails={cocktailSearchByName}
                title={searchByNameValue}
            />
        </>
    );
};

export default Cocktails;
