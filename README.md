# flavorcss

Runtime Build Atomic Class

## Document: [https://gewulian.com](https://gewulian.com)

## Use Auto observer

Auto observer use in MutationObserver.

```html

<script type="module" src="https://unpkg.com/flavorcss@0.6.11/es/index.js"></script>
<script>
    window.flavorObserver()
</script>
```

Use npm:

```sh
npm i flavorcss
```

Import in your project

Auto observer html change:

```js
import {flavorObserver} from "flavorcss";

flavorObserver()
```

## Use className

If you not use MutationObserver, you can manual use className:

```js
import {flavor} from "flavorcss";

function App(){
    return <div className={flavor("background:#f00")}></div>
}
```
