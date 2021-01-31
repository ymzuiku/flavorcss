export declare const pesudoList: any;
export declare const mediaList: any;
interface FixClassName {
    comp: (params: string[]) => string;
    pesudo: string;
    media: string;
    name: string;
    realName: string;
    query: string;
    value: string;
}
export declare function fixClassName(group: string, css: string): FixClassName;
export {};
