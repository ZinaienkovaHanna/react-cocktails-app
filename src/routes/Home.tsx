import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import Search from '../components/Search';
import Title from '../components/Title';
import CocktailList from '../components/CocktailList';
import data from '../data/autocompleteCocktails.json';
import { CocktailType } from '../types/cocktailsTypes';

const Home: FC = () => {
    const { popularCocktails } = useLoaderData() as {
        popularCocktails: CocktailType[];
    };

    return (
        <>
            <Search
                path="cocktails"
                placeholder="Search by name..."
                autocompleteData={data}
            />
            <Title />
            <CocktailList cocktails={popularCocktails} />
        </>
    );
};

export default Home;
