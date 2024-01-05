import { FC } from 'react';
import Search from '../components/Search';
import data from '../data/autocompleteCocktails.json';

const CocktailSearch: FC = () => {
    return (
        <Search
            path="cocktails"
            placeholder="Search by name..."
            autocompleteData={data}
        />
    );
};

export default CocktailSearch;
