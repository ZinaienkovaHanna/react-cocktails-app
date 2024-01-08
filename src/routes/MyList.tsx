import { FC } from 'react';
import { useAppSelector } from '../hooks/useAppSelector';
import CocktailList from '../components/CocktailList';

const MyList: FC = () => {
    const { cocktails } = useAppSelector((state) => state.cocktails);

    return <CocktailList cocktails={cocktails} title="My List" />;
};

export default MyList;
