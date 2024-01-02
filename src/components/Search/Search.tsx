import { FC, useState } from 'react';
import { getCocktailbyName } from '../../services/cocktailsAPI';

import styles from './Search.module.css';

const Search: FC = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = async () => {
        try {
            const cocktail = await getCocktailbyName(searchValue);
            console.log(cocktail);
        } catch (error) {
            console.error('Error fetching cocktail:', error);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchValue.trim() !== '') {
            handleSearch();
        }
    };

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search by name..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className={styles.input}
            />
            <button
                type="submit"
                className={styles.button}
                onClick={() => handleSearch()}
            >
                Search
            </button>
        </form>
    );
};

export default Search;
