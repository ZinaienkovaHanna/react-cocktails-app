import { FC } from 'react';
// import { useLoaderData } from 'react-router';
import CategoryDropdown from '../components/CategoryDropdown';
// import CocktailList from '../components/CocktailList';
// import { CocktailType } from '../types/cocktailsTypes';

const Categories: FC = () => {
    // const { cocktailsByCategory } = useLoaderData() as {
    //     cocktailsByCategory: CocktailType[];
    //     categoryValue: string;
    // };

    return (
        <>
            <CategoryDropdown />
            {/* <CocktailList cocktails={cocktailsByCategory} /> */}
        </>
    );
};

export default Categories;
