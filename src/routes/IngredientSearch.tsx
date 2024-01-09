import { FC } from 'react';
import Search from '../components/Search';
import EmptyList from '../components/EmptyList';
import data from '../data/autocompleteIngredients.json';

const IngredientsSearch: FC = () => {
    return (
        <>
            <Search
                path="ingredients"
                placeholder="Search by ingredients..."
                autocompleteData={data}
            />
            <EmptyList />
        </>
    );
};

export default IngredientsSearch;
