import isPlainObject from 'is-plain-obj';

export interface Options {
    deep?: boolean;
    compare?: (left: string, right: string) => number;
}

export default function sortKeys<T extends Record<string, any>>(
    object: T,
    options?: Options
): T;
export default function sortKeys<T>(
    object: T[],
    options?: Options
): T[];

export default function sortKeys<T>(object: T | T[], options : Options = {}): T | T[] {
    if (!isPlainObject(object) && !Array.isArray(object)) {
        throw new TypeError('Expected a plain object or array');
    }

    const {deep, compare} = options;
    const seenInput: Array<any> = [];
    const seenOutput: Array<any> = [];

    const deepSortArray = (array: Array<any>): any => {
        const seenIndex = seenInput.indexOf(array);
        if (seenIndex !== -1) {
            return seenOutput[seenIndex];
        }

        const result:Array<any> = [];
        seenInput.push(array);
        seenOutput.push(result);

        result.push(...array.map(item => {
            if (Array.isArray(item)) {
                return deepSortArray(item);
            }

            if (isPlainObject(item)) {
                return _sortKeys(item);
            }

            return item;
        }));

        return result;
    };

    const _sortKeys = (object: Record<any, any>): any => {
        const seenIndex = seenInput.indexOf(object);
        if (seenIndex !== -1) {
            return seenOutput[seenIndex];
        }

        const result = {};
        const keys = Object.keys(object).sort(compare);

        seenInput.push(object);
        seenOutput.push(result);

        for (const key of keys) {
            const value = object[key];
            let newValue;

            if (deep && Array.isArray(value)) {
                newValue = deepSortArray(value);
            } else {
                newValue = deep && isPlainObject(value) ? _sortKeys(value) : value;
            }

            Object.defineProperty(result, key, {
                ...Object.getOwnPropertyDescriptor(object, key),
                value: newValue
            });
        }

        return result;
    };

    if (Array.isArray(object)) {
        return deep ? deepSortArray(object) : object.slice();
    }

    return _sortKeys(object);
}