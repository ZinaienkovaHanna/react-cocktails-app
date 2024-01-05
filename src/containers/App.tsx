import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from '../routes/Root';
import ErrorPage from '../routes/ErrorPage';
import Home from '../routes/Home';
import Categories from '../routes/Categories';
import MyList from '../routes/MyList';
import Cocktail from '../routes/Cocktail';
import Cocktails from '../routes/Cocktails';
import CocktailSearch from '../routes/CocktailSearch';
import Ingredients from '../routes/Ingredients';
import IngredientSearch from '../routes/IngredientSearch';
import {
    homeLoader,
    cocktailLoader,
    cocktailSearchLoader,
    ingredientSearchLoader,
} from '../routes/loader';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: homeLoader,
            },
            {
                path: '/categories',
                element: <Categories />,
            },
            {
                path: '/cocktails',
                element: <CocktailSearch />,
            },
            {
                path: '/cocktails/:cocktailId',
                element: <Cocktail />,
                loader: cocktailLoader,
            },
            {
                path: '/cocktails/search/:searchByNameValue',
                element: <Cocktails />,
                loader: cocktailSearchLoader,
            },
            {
                path: '/ingredients',
                element: <IngredientSearch />,
            },
            {
                path: '/ingredients/search/:searchByIngredientValue',
                element: <Ingredients />,
                loader: ingredientSearchLoader,
            },
            {
                path: '/mylist',
                element: <MyList />,
            },
        ],
    },
]);

const App: FC = () => {
    return <RouterProvider router={router} />;
};

export default App;
