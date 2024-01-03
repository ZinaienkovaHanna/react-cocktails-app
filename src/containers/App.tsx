import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from '../routes/Root';
import ErrorPage from '../routes/ErrorPage';
import Home from '../routes/Home';
import Categories from '../routes/Categories';
import Ingredients from '../routes/Ingredients';
import MyList from '../routes/MyList';
import Cocktail from '../routes/Cocktail';
import { homeLoader, cocktailLoader } from '../routes/loader';

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
                path: '/cocktails/:cocktailId',
                element: <Cocktail />,
                loader: cocktailLoader,
            },
            {
                path: '/ingredients',
                element: <Ingredients />,
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
