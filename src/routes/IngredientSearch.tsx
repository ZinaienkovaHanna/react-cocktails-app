import { FC } from 'react';
import Search from '../components/Search';
import data from '../data/autocompleteIngredients.json';

const IngredientsSearch: FC = () => {
    return (
        <Search
            path="ingredients"
            placeholder="Search by ingredients..."
            autocompleteData={data}
        />
    );
};

export default IngredientsSearch;
