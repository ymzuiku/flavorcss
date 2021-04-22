# AMD 使用 monaco-editor

## Install

按照以下方式拷贝 monaco 到 public 下面

```sh
yarn add monaco-editor
cp -rf node_modules/monaco-editor/min/vs public
cp -rf node_modules/monaco-editor/min-maps public
```

## Use

```js
import Monaco from "./monaco";

Monaco().then((monaco) => {
  monaco.editor.create(out, {
    value: "console.log('hello')",
    language: "javascript",
  });
});
```
