export declare const flavorcss: {
    device: () => import("./device").Device;
    parser: (css: string, name?: string, media?: string, mediaName?: string, pesudo?: string, group?: string) => string;
    observeClass: () => void;
    classGroup: (group: any, name: string, value: string) => void;
    mediaList: any;
    pesudoList: any;
    reset: () => void;
};
