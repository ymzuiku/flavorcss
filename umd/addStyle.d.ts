interface AddStyle {
    css: string;
    name?: string;
    media?: string;
    pesudo?: string;
    group?: string;
}
export declare const addStyle: ({ css, name, media, pesudo, group, }: AddStyle) => void;
export {};
