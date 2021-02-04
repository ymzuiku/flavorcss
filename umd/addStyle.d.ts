interface AddStyle {
    css: string;
    name?: string;
    media?: string;
    mediaName?: string;
    pesudo?: string;
    group?: string;
}
export declare const addStyle: ({ css, name, media, mediaName, pesudo, group, }: AddStyle) => void;
export {};
