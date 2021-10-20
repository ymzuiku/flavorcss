import { parseClass } from "./parser";

const bindAttribute = (Target: HTMLElement | SVGSVGElement) => {
  const setAttribute = (Target as any).prototype.setAttribute;
  (Target as any).prototype.setAttribute = function (name: any, value: any) {
    if (name === 'class') {
      parseClass(value)
    }
    setAttribute(name, value);
  }
};

export function proxyClass(){
  // (HTMLElement as any).prototype = new Proxy(HTMLElement.prototype, {
  //   set(target, p, v, receiver: any){
  //     console.log(target, p, v);
  //     if (p === 'className') {
  //       parseClass(v as string);  
  //     }
  //     return true; 
  //   }
  // })

  bindAttribute(HTMLElement as any);
  bindAttribute(SVGSVGElement as any);
}