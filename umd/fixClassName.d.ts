export declare const pesudoList: any;
export declare const mediaList: any;
interface FixClassName {
    comp: (params: string[]) => string;
    compName: string;
    pesudo: string;
    pesudoName: string;
    media: string;
    mediaName: string;
    name: string;
    query: string;
    value: string;
}
export declare function fixClassName(group: string, css: string): FixClassName;
export {};
