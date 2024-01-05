import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Search.module.css';

interface SearchType {
    path: string;
    placeholder: string;
    autocompleteData: any;
}

const Search: FC<SearchType> = ({ path, placeholder, autocompleteData }) => {
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchValue.trim() !== '') {
            navigate(`/${path}/search/${searchValue}`, { replace: true });
            setSearchValue('');
        }
    };

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder={placeholder}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className={`${styles.input} ${
                    !searchValue.trim() && styles.invalid
                }`}
                list={path}
                required
            />
            <datalist id={path}>
                {' '}
                {autocompleteData.map((value: any) => (
                    <option key={value.id} value={value.name} />
                ))}
            </datalist>
            <button className={styles.button}>Search</button>
        </form>
    );
};

export default Search;
