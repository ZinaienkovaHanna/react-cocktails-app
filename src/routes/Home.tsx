import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import Search from '../components/Search';
import Title from '../components/Title';
import CocktailList from '../components/CocktailList';
import { CocktailType } from '../types/cocktailsTypes';

const Home: FC = () => {
    const { popularCocktails } = useLoaderData() as {
        popularCocktails: CocktailType[];
    };

    return (
        <>
            <Search />
            <Title />
            <CocktailList cocktails={popularCocktails} />
        </>
    );
};

export default Home;
