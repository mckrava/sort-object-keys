interface Options {
    deep?: boolean;
    compare?: (left: string, right: string) => number;
}
declare function sortObjectKeys<T extends Record<string, any>>(object: T, options?: Options): T;
declare function sortObjectKeys<T>(object: T[], options?: Options): T[];

export { Options, sortObjectKeys as default };
