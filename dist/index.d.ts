interface Options {
    deep?: boolean;
    compare?: (left: string, right: string) => number;
}
declare function sortKeys<T extends Record<string, any>>(object: T, options?: Options): T;
declare function sortKeys<T>(object: T[], options?: Options): T[];

export { Options, sortKeys as default };
