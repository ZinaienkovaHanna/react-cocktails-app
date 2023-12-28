import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import { CocktailType } from '../types/cocktailsTypes';

const Home: FC = () => {
    const { popularCocktails } = useLoaderData() as {
        popularCocktails: CocktailType[];
    };

    return <div>Home</div>;
};

export default Home;
