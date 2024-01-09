import { FC } from 'react';
import Search from '../components/Search';
import Title from '../components/Title';
import CocktailList from '../components/CocktailList';
import data from '../data/autocompleteCocktails.json';
import popularCocktails from '../data/popularCocktails.json';

const Home: FC = () => {
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
