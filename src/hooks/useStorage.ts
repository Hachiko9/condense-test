export const useStorage = () => {

    const setItem = (key: string, value: string[] ) => {
        localStorage.setItem(key, JSON.stringify(value))
    }

    const getItem = (key: string) => {
        const item = localStorage.getItem(key);
        if (item) return JSON.parse(item);
        console.warn('key not found');
    }

    return {setItem, getItem}
}