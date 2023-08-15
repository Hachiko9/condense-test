import { useState, useCallback } from "react";

export default function useStorage<T>(key: string) {
    const [value, setValue] = useState<T | undefined>(() => {
        if (typeof window !== "undefined") {
            const value = localStorage.getItem(key);
    
            return value ? (JSON.parse(value)) : undefined;
        }

        return undefined;
    });

    const set = useCallback(
        (v: T) => {
            localStorage.setItem(key, JSON.stringify(v));
            setValue(v);
        },
        [key]
    );

    const clear = useCallback(() => {
        localStorage.removeItem(key);
        setValue(undefined);
    }, [key]);

    return {
        value,
        set,
        clear
    };
}