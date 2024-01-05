export interface StatusType {
    bookmarked: true | false;
}

export const getCocktailStatus = (id: string): StatusType | null => {
    const storedStatus = localStorage.getItem(id);

    if (storedStatus) {
        return JSON.parse(storedStatus);
    }

    return null;
};

export const updateCocktailStatus = (
    id: string,
    newStatus: StatusType
): void => {
    const storedStatus = localStorage.getItem(id);

    if (storedStatus && newStatus.bookmarked === false) {
        localStorage.removeItem(id);
    } else {
        localStorage.setItem(id, JSON.stringify(newStatus));
    }
};

export const getBookmarkedKeys = () => {
    return Object.keys(localStorage);
};
