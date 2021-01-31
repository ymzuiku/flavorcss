interface AddStyle {
    css: string;
    name?: string;
    media?: string;
    pesudo?: string;
    query?: string;
    group?: string;
}
export declare const addStyle: ({ css, name, media, pesudo, query, group, }: AddStyle) => void;
export {};
