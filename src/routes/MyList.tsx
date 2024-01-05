import { FC } from 'react';
import { useLoaderData } from 'react-router';
import { CocktailType } from '../types/cocktailsTypes';
import CocktailList from '../components/CocktailList';

const MyList: FC = () => {
    const { bookmarkedCocktails } = useLoaderData() as {
        bookmarkedCocktails: CocktailType[];
    };
    return <CocktailList cocktails={bookmarkedCocktails} title="My List" />;
};

export default MyList;
