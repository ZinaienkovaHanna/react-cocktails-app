import { FC } from 'react';
import { useAppSelector } from '../hooks/useAppSelector';
import CocktailList from '../components/CocktailList';
import EmptyList from '../components/EmptyList';

const MyList: FC = () => {
    const { cocktails } = useAppSelector((state) => state.cocktails);

    return cocktails.length === 0 ? (
        <EmptyList />
    ) : (
        <CocktailList cocktails={cocktails} title="My List" />
    );
};

export default MyList;
