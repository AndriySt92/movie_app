export const setLocalStorageItem = <T>(key: string, val: T): void => {
    const value = typeof val === 'object' ? JSON.stringify(val) : String(val);
    localStorage.setItem(key, value);
};

export const getObjectFromLocalStorage = (
    key: string
): {[key: string]: string | number} | null => {
    const data = localStorage.getItem(key);
    if (data) {
        const item = JSON.parse(data);
        return item;
    }
    return null;
};