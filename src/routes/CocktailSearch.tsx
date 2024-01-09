import { FC } from 'react';
import Search from '../components/Search';
import EmptyList from '../components/EmptyList';
import data from '../data/autocompleteCocktails.json';

const CocktailSearch: FC = () => {
    return (
        <>
            <Search
                path="cocktails"
                placeholder="Search by name..."
                autocompleteData={data}
            />
            <EmptyList />
        </>
    );
};

export default CocktailSearch;
