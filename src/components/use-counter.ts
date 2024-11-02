import { atom } from "nanostores";

export const useCounter = () => {
    
    const _counter = atom(0);

    return {
        increment: () => {
            _counter.set(_counter.get() + 1);
        },
        atomCounter: _counter
    };
};

