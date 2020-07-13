# flavorcss

Runtime Build Atomic Class

Document: [http://flavorcss.writeflowy.com](http://flavorcss.writeflowy.com)
## 初见

> 市面上有一种CSS方案叫做 `Atomic CSS`，如果你用过它；有的人会觉得非常荒唐，重新回到他习惯的BEM风格怀抱中。

> 有的人会爱上它。

> 我就是后者。

一个极端一点的，复杂一点的`Atomic CSS`，它长这个样子：

```html
<button class="
  px-lg py-sm radius-sm m-md pc:m-lg
  bg-blue-600 hover:bg-blue-500 active:bg-blue-400 
  shadow hover:shadow-lg 
  transform hover:move-y--px active:move-y-px 
  c-white cursor-pointer transition-500"
>
  Touch Me
</button>
```

我相信，正常的前端小伙伴见到这一大块的 class，会很头痛，乍眼一看和天书没区别，立刻换成了下面这块代码：
```html
<button class="im-a-button">Touch Me</button>
```
这多简洁，心里舒坦多了。

但是这其实并没有完整解决问题，因为我们还是需要添加下面这段css代码才等价于刚刚那串头疼的代码：

```css
/* 首先我们需要为我们的项目设计一套单位规范和颜色规范 */
:root {
    --px: 1px;
    --sm: 2px;
    --md: 8px;
    --lg: 16px;
    --blue-600: #6677ff;
    --blue-500: #4455ff;
    --blue-400: #3355ee;
    --shadow-color: #000000;
    --shadow-opacity: 0.15;
    --white: #fff;
    --ease: cubic-bezier(0.23, 1, 0.32, 1);
}

.im-a-button {
    /* 所有单位使用 css-values 是为了更好的统一整体风格、尺寸，并且更容易的调整整个项目的样式 */
    padding: var(--sm) var(--lg) var(--sm) var(--lg);
    border-radius: var(--sm);
    margin: var(--md);
    background: var(--blue-600);
    box-shadow: 0 1px 3px 0 rgba(var(--shadow-color), var(--shadow-opacity)), 0 1px 2px 0 rgba(var(--shadow-color), calc(var(--shadow-opacity) / 2));
    /* 白色也使用 css values 是为了更好的做 dark 模式 */
    color: var(--white);
    transition: all 500ms var(--ease);
    will-change: transform;
}

@media (min-width: 640px) {
    .im-a-button {
        margin: var(--lg);
    }
    
    /* hover 在移动端会导致hover的样式被touch响应后不被释放，为了更好的体验建议 hover 仅在桌面端起效果 */
    .im-a-button:hover {
        background: var(--blue-500);
        box-shadow: 0 10px 15px -3px rgba(var(--shadow-color), var(--shadow-opacity)), 0 4px 6px -2px rgba(var(--shadow-color), calc(var(--shadow-opacity) / 2));
        tramsform: translateY(calc(0px - var(--px)));
        margin: var(--2xl);
    }    
}

.im-a-button:active {
    background: var(--blue-400);
    box-shadow: 0 10px 15px -3px rgba(var(--shadow-color), var(--shadow-opacity)), 0 4px 6px -2px rgba(var(--shadow-color), calc(var(--shadow-opacity) / 2));
    tramsform: translateY(var(--px));
}  

```

当我们看到这个 css 代码块，才回到了我们真正的场景：

- css 的代码量是线性增加的，我们不但得写不少css代码，最后还需要对项目的 css 做拆封，以提高首屏的加载时间
- css 是需要预先做设计和规范的，并且还需要为每个参与者做一定的培训/教育
- 大块的css阅读其实体验并不好，一个包含媒体查询、伪类、动画的单一元素的css样式甚至无法在一屏显示完
- css values 非常棒，但是如果贯穿项目，它会影响整个 css 的阅读体验和 css 文件体积
- 编写 css 需要取非常多的名字，比我们整个项目的变量名还多，而且为了减少 css 污染，我们还需要引入 css-modules 或者 BEM，会继续添加心智负担

现在我们再重新阅读这块 `Atomic CSS` 风格的代码：

```html
<button class="
  px-lg py-sm radius-sm m-md pc:m-lg
  bg-blue-600 hover:bg-blue-500 active:bg-blue-400 
  shadow hover:shadow-lg 
  transform hover:move-y--px active:move-y-px 
  c-white cursor-pointer transition-500"
>
  Touch Me
</button>
```

我们可以发现`Atomic CSS`的阅读体验还是不错的（50步笑100步），并且我们现在大概可以猜出上面大部分 class 的含义。

那么如果我们有一个非常好的规范，设计好的，有逻辑 `Atomic CSS` 风格的样式库，那我们可以非常高效的编写我们的界面，并且解决了我们刚刚提出来的常见问题。

这就是作者爱上 `Atomic CSS` 风格的原因, 一套好的 `Atomic CSS` 相当于 css 的 `vim`.


## 快乐

 - 用了 `Atomic CSS` 之后，我们就不需要再去苦思冥想一堆 BEM 名称了
 - 我们可以用非常有简短、有描述性的class类直接描述我们的UI，绘制界面的效率得到一个大的提升。
 - 我们可以非常容易的修改整个项目的风格
 - 我们的项目仅仅剩下下 Javascript/Typescript 文件
 - 由于规范统一，我们甚至可以直接复制其他项目的`Atomic CSS`风格的 `className`

## 痛苦

市面最流行的`Atomic CSS`是`Tailwind CSS`.

如果大伙在掘金、某乎、油管上搜索一下，有不少的拥护者，我就是其中之一。

但是用的久了，慢慢发现它的一个核心痛点：**我们如何确定原子类个数的边界？**

`Atomic CSS` 的本质是预设了一系列有规则的 `css` 样式，但是预设多少样式才足够我们不需要编写95%的常规`css`代码呢？这基本上要把我们可能的组合枚举出来，即使在有规范限定的前提下大概需要`2.5MB`的 `css` 代码量，虽然当中 99% `Atomic CSS` 都是用不到的，而这个代码量之大导致于我们不可能直接使用这类方案。

为此有一个使用 `Purgecss` 去清理未使用 CSS 的方案，可以在编译期间对我们的业务代码进行正则匹配，仅保留我们用到的 `Atomic CSS`，最后大概只需要 `10~50kb` 的 `css` 代码。

这也是有代价的，我们需要注意 class 的书写方式，如果我们使用变量的方式动态创建 className， Purgecss 就无法在编译期间通过正则找到我们使用过的此类 css。

并且由于一般情况我们不合适在开发环境做这个动作，不然我们每添编一写一个组件就得编译一次才能看到效果，而我们若只在编译生产代码时才做这个动作其实是有风险的，若有正则未匹配到的对象，可能会导致不可预知的生产bug，例如一个模块无法呈现。

而 `Flavorcss` 的方案很好的规避了如何确定原子类个数的边界这个问题，Flavorcss 是在运行时编译所需 Atomic Class, 并且只编译用到的 css，并且做了精细的缓存，让用户无感知。

Flavorcss 是零配置开箱即用的，我们只需要引入：

```html
<script src="https://unpkg.com/flavorcss@0.1.3/umd/index.js"></script>
```

或者:

```sh
yarn add flavorcss
```
```js
import 'flavorcss'
```

然后粘贴刚刚我们反复提到的 button 代码看看效果：

```html
<button class="
  px-lg py-sm radius-sm m-md pc:m-lg
  bg-blue-600 hover:bg-blue-500 active:bg-blue-400 
  shadow hover:shadow-lg 
  transform hover:move-y--px active:move-y-px 
  c-white cursor-pointer transition-500"
>
  Touch Me
</button>
```


`Flavorcss` 会编译并插入有关的 `Atomic CSS` 样式


## 踌躇


其他问题，Tailwind CSS 的作者写过一片对 `Atomic CSS` 风格的思考文章，可以建议扩展阅读：

https://adamwathan.me/css-utility-classes-and-separation-of-concerns/


这里我先简要回答一部分比较常见的问题

- 为什么我们不直接写内联样式？
    - 因为内联样式无法直接编写媒体查询和伪类
- css-in-js 比起这种方案如何？
    - css-in-js 并没有默认帮我们设计好尺寸、颜色规范，也并没有大幅度减少总代码量，把css迁移·到了js，为的是提供更多的控制力度，它们的目的不一样。
- 性能如何
    - 刚开始会创建较多的 css ，所以初始化会有性能开销，但是用户无感知

## Flavorcss

以下是 Flavorcss 的官方文档，上面有所有的样式说明和描述，读者可以在上面动态编辑示例，以更简单的了解所有规范。Flavorcss 承诺现有的 API, 除了相关 `Grid` 之外均稳定，不会修改。

http://flavorcss.writeflowy.com/