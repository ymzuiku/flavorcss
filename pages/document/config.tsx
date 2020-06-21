import doc from "components/Doc";
import Layout from "./Layout";
import Code from "components/Code";
import CodeEditor from "components/CodeEditor";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>自定义配置</h1>
        <p className={doc.p}>
          fbc 所有的非固定的参数，都会读取 css
          变量进行组合，所以我们仅需要在项目中覆盖 css 变量，就可以自定义整个
          fbc 配置。
        </p>
        <h2 className={doc.h2}>所有默认 css values：</h2>
        <Code language="css" className={doc.pre}>{`
:root {
  font-size: 16px;
  --media: 720px;
  --none: none;
  --auto: auto;
  --px: 0.5px;
  --vw: 100vw;
  --vh: 100vh;
  --small: 640px;
  --middle: 720px;
  --large: 1024px;
  --fs-0: 0rem;
  --fs-auto: auto;
  --fs-px: 0.5em;
  --fs-xs: .75em;
  --fs-sm: .875em;
  --fs-md: 1em;
  --fs-lg: 1.125em;
  --fs-xl: 1.25em;
  --fs-2xl: 1.5em;
  --fs-3xl: 1.875em;
  --fs-4xl: 2.25em;
  --fs-5xl: 3em;
  --fs-6xl: 4em;
  --pt-0: 0px;
  --pt-auto: auto;
  --pt-px: 1px;
  --pt-xs: 4px;
  --pt-sm: 8px;
  --pt-md: 16px;
  --pt-lg: 24px;
  --pt-xl: 34px;
  --pt-2xl: 48px;
  --pt-3xl: 64px;
  --pt-4xl: 170px;
  --pt-5xl: 260px;
  --pt-6xl: 340px;
  --li-0: 0px;
  --li-auto: auto;
  --li-px: 1px;
  --li-xs: 2px;
  --li-sm: 4px;
  --li-md: 6px;
  --li-lg: 8px;
  --li-xl: 12px;
  --li-2xl: 18px;
  --li-3xl: 24px;
  --li-4xl: 32px;
  --li-5xl: 42px;
  --li-6xl: 999px;
  --white: 255,255,255;
  --black: 0,0,0;
  --primary-100: 235,248,255;
  --primary-200: 190,227,248;
  --primary-300: 144,205,244;
  --primary-400: 98,179,237;
  --primary-500: 66,153,225;
  --primary-600: 49,130,206;
  --primary-700: 43,109,176;
  --primary-800: 44,82,130;
  --primary-900: 43,67,101;
  --gray-100: 247,250,252;
  --gray-200: 237,242,246;
  --gray-300: 226,232,240;
  --gray-400: 204,213,224;
  --gray-500: 160,174,192;
  --gray-600: 113,128,150;
  --gray-700: 73,85,104;
  --gray-800: 44,55,72;
  --gray-900: 26,32,44;
  --red-100: 254,245,245;
  --red-200: 255,215,215;
  --red-300: 254,178,178;
  --red-400: 246,173,84;
  --red-500: 236,137,54;
  --red-600: 221,106,31;
  --red-700: 192,85,33;
  --red-800: 155,66,33;
  --red-900: 123,52,30;
  --orange-100: 255,250,240;
  --orange-200: 255,235,200;
  --orange-300: 251,211,141;
  --orange-400: 246,173,84;
  --orange-500: 236,137,54;
  --orange-600: 221,106,31;
  --orange-700: 192,85,33;
  --orange-800: 155,66,33;
  --orange-900: 123,52,30;
  --yellow-100: 255,255,240;
  --yellow-200: 255,252,191;
  --yellow-300: 250,240,136;
  --yellow-400: 245,224,94;
  --yellow-500: 235,200,75;
  --yellow-600: 215,158,46;
  --yellow-700: 182,121,31;
  --yellow-800: 151,90,23;
  --yellow-900: 116,65,16;
  --green-100: 240,255,244;
  --green-200: 198,246,213;
  --green-300: 155,230,180;
  --green-400: 104,211,145;
  --green-500: 72,187,129;
  --green-600: 56,161,105;
  --green-700: 47,132,90;
  --green-800: 39,104,73;
  --green-900: 33,84,61;
  --teal-100: 230,255,250;
  --teal-200: 177,245,234;
  --teal-300: 129,231,217;
  --teal-400: 78,209,197;
  --teal-500: 55,179,172;
  --teal-600: 49,151,149;
  --teal-700: 46,122,123;
  --teal-800: 39,94,97;
  --teal-900: 35,78,82;
  --blue-100: 235,248,255;
  --blue-200: 190,227,248;
  --blue-300: 144,205,244;
  --blue-400: 98,179,237;
  --blue-500: 66,153,225;
  --blue-600: 49,130,206;
  --blue-700: 43,109,176;
  --blue-800: 44,82,130;
  --blue-900: 43,67,101;
  --indigo-100: 236,244,255;
  --indigo-200: 195,218,254;
  --indigo-300: 162,191,250;
  --indigo-400: 127,156,244;
  --indigo-500: 102,126,234;
  --indigo-600: 89,104,216;
  --indigo-700: 76,82,191;
  --indigo-800: 67,64,144;
  --indigo-900: 60,54,107;
  --purple-100: 250,245,255;
  --purple-200: 233,217,253;
  --purple-300: 215,188,250;
  --purple-400: 182,147,244;
  --purple-500: 159,121,234;
  --purple-600: 128,90,213;
  --purple-700: 108,71,193;
  --purple-800: 85,60,154;
  --purple-900: 67,51,122;
  --pink-100: 255,245,247;
  --pink-200: 255,214,226;
  --pink-300: 251,182,206;
  --pink-400: 245,136,179;
  --pink-500: 237,99,166;
  --pink-600: 214,63,140;
  --pink-700: 184,50,128;
  --pink-800: 151,39,109;
  --pink-900: 112,35,89;
  --shadow-color: 0,0,0;
  --shadow-opa: 0.13;
  --ease: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --sans: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --serif: Georgia, Cambria, "Times New Roman", Times, serif;
  --mono: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
  `}</Code>
        <h2 className={doc.h2}>样式覆盖示例</h2>
        <p className={doc.p}>
          由于fbc是异步编译css样式，所以根据css覆盖原则，我们建议将覆盖默认样式放在body上:
        </p>
        <Code language="css" className={doc.pre}>{`
body {
  --fs-base: 24px;
  --primary-100: 255,250,240;
  --primary-200: 255,235,200;
  --primary-300: 251,211,141;
  --primary-400: 246,173,84;
  --primary-500: 236,137,54;
  --primary-600: 221,106,31;
  --primary-700: 192,85,33;
  --primary-800: 155,66,33;
  --primary-900: 123,52,30;
}
`}</Code>
        <h2 className={doc.h2}>指定元素样式覆盖</h2>
        <p className={doc.p}>
          我们也可以使用 css values 的特性，仅对某些层级的元素进行样式覆盖
        </p>
        <CodeEditor language="css" codeClassName={doc.edit}>
          {`
<div class="max-w-100 p-md bg-teal-100">
  <h2 class="fs-lg c-blue-500">Hello</h2>
  <p class="fs-md">Configs</p>
</div>
<!-- 相同的样式，我们将基础字号覆盖为40px，蓝色覆盖为红色 -->
<div class="max-w-100 p-md bg-teal-100" style="font-size:40px;
--blue-500:255,0,0">
  <h2 class="fs-lg c-blue-500">Hello</h2>
  <p class="fs-md">Configs</p>
</div>
`}
        </CodeEditor>
        <h2 className={doc.h1}>高级配置</h2>
        <p className={doc.p}>
          修改媒体查询宽度 、开启 first-child、last-child、odd-child
          等媒体查询等高级配置，为了更简单的兼容 SSR 方案，我们使用 DOM
          元素的属性进行描述配置。
        </p>
        <p className={doc.p}>添加下面元素在 fbc.js 脚本之前，进行配置：</p>
        <Code className={doc.pre}>{`
<div id="fbc" media-sm="640px" media-md="720px" media-lg="1024px" media-sm="1280px" use-child="true"></div>
`}</Code>
        <h2 className="">默认的全局样式</h2>
        <p className={doc.p}>
          fbc在 Normalize.css
          的基础上为了常规更好的编写代码，加入一部分全局样式，这对现有项目可能会有影响：
        </p>
        <p className={doc.p}>这是默认的全局样式:</p>
        <Code language="css" className={doc.pre}>{`
html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}

blockquote,dl,dd,h1,h2,h3,h4,h5,h6,figure,p,pre { margin: 0; font-size: 1em;}
h1,h2,h3,h4,h5,h6 { font-size: inherit; font-weight: inherit;}
a { text-decoration:none;}
ol,ul { list-style: none; margin: 0; padding: 0;}
img, image { object-fit: cover; object-position: 50% 50%; }
img,svg,video,canvas,audio,iframe,embed,object { display: block; vertical-align: middle;}

*,
*::before,
*::after { border-width: 0; border-style: solid; border-color: currentColor; }
table { border-collapse: collapse}
body { padding:0px;margin:0px;font-family: var(--sans);}
* { box-sizing: border-box;  outline:0; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
`}</Code>
        <p className={doc.p}>可以通过配置关闭以上全局样式:</p>
        <Code className={doc.pre}>{`
<div id="fbc" not-effect="true"></div>
`}</Code>
      </main>
      <div className={doc.footerSpace}></div>

    </Layout>
  );
};
