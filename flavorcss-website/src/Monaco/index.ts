/// <reference path="./monaco.d.ts" />

const loader = document.createElement("script");
loader.src = "/vs/loader.js";
document.head.append(loader);
let _monaco: any;
loader.onload = () => {
  const require = (window as any).require;
  require.config({ paths: { vs: "/vs" } });
  require(["vs/editor/editor.main"], function () {
    _monaco = (window as any).monaco;
  });
};

export default (): Promise<typeof monaco> => {
  return new Promise((res) => {
    const load = () => {
      if (_monaco) {
        res(_monaco);
      } else {
        setTimeout(load, 30);
      }
    };

    load();
  });
};
