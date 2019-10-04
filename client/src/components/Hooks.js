import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {

    const [storage, setStorage] = useState(() => {

        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });
    const setStore = value => {
        setStorage(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    return [storage, setStore];
}