export interface Device {
    android: boolean;
    firefox: boolean;
    chrome: boolean;
    tablet: boolean;
    ios: boolean;
    wechat: boolean;
    pc: boolean;
    iphone: boolean;
    phone: boolean;
    safari: boolean;
}
export declare const device: () => Device;
