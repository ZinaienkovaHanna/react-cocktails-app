import { FC } from 'react';
import { useLoaderData } from 'react-router';
import CocktailPage from '../components/CocktailPage';
import { CocktailType } from '../types/cocktailsTypes';

const Cocktail: FC = () => {
    const { cocktail } = useLoaderData() as { cocktail: CocktailType[] };

    return <CocktailPage cocktail={cocktail} />;
};

export default Cocktail;
