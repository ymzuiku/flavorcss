!function(n){"function"==typeof define&&define.amd?define(n):n()}(function(){"use strict";console.time("fbc-base");var a="",l=["\\@sm","\\@md","\\@lg","\\@xl","vw","vh"],c=["auto","0","px","xs","sm","md","lg","xl","2xl","3xl","4xl","5xl","6xl"],n=document.getElementById("fbc"),e=n&&n.getAttribute("media-sm")||"640px",o=n&&n.getAttribute("media-md")||"720px",t=n&&n.getAttribute("media-lg")||"1024px",r=n&&n.getAttribute("media-xl")||"1280px",i=n&&n.getAttribute("use-child"),s=n&&n.getAttribute("not-effect"),p=n&&n.getAttribute("use-media-sm"),f=n&&n.getAttribute("use-media-md"),d=n&&n.getAttribute("use-media-lg"),u=n&&n.getAttribute("use-media-xl");a+="\n:root {\nfont-size: 16px;\n--media: 720px;\n--none: none;\n--auto: auto;\n--px: 0.5px;\n--vw: 100vw;\n--vh: 100vh;\n--\\@sm: "+e+";\n--\\@md: "+o+";\n--\\@lg: "+t+";\n--\\@xl: "+r+';\n--\\@container: 75%;\n--fs-0: 0rem;\n--fs-auto: auto;\n--fs-px: 0.5em;\n--fs-xs: .75em;\n--fs-sm: .875em;\n--fs-md: 1em;\n--fs-lg: 1.125em;\n--fs-xl: 1.25em;\n--fs-2xl: 1.5em;\n--fs-3xl: 1.875em;\n--fs-4xl: 2.25em;\n--fs-5xl: 3em;\n--fs-6xl: 4em;\n--pt-0: 0px;\n--pt-auto: auto;\n--pt-px: 1px;\n--pt-xs: 4px;\n--pt-sm: 8px;\n--pt-md: 16px;\n--pt-lg: 24px;\n--pt-xl: 34px;\n--pt-2xl: 48px;\n--pt-3xl: 64px;\n--pt-4xl: 170px;\n--pt-5xl: 260px;\n--pt-6xl: 340px;\n--li-0: 0px;\n--li-auto: auto;\n--li-px: 1px;\n--li-xs: 2px;\n--li-sm: 4px;\n--li-md: 6px;\n--li-lg: 8px;\n--li-xl: 12px;\n--li-2xl: 18px;\n--li-3xl: 24px;\n--li-4xl: 32px;\n--li-5xl: 42px;\n--li-6xl: 999px;\n--white: 255,255,255;\n--black: 0,0,0;\n--primary-100: 235,248,255;\n--primary-200: 190,227,248;\n--primary-300: 144,205,244;\n--primary-400: 98,179,237;\n--primary-500: 66,153,225;\n--primary-600: 49,130,206;\n--primary-700: 43,109,176;\n--primary-800: 44,82,130;\n--primary-900: 43,67,101;\n--gray-100: 247,250,252;\n--gray-200: 237,242,246;\n--gray-300: 226,232,240;\n--gray-400: 204,213,224;\n--gray-500: 160,174,192;\n--gray-600: 113,128,150;\n--gray-700: 73,85,104;\n--gray-800: 44,55,72;\n--gray-900: 26,32,44;\n--red-100: 254,245,245;\n--red-200: 255,215,215;\n--red-300: 254,178,178;\n--red-400: 246,173,84;\n--red-500: 236,137,54;\n--red-600: 221,106,31;\n--red-700: 192,85,33;\n--red-800: 155,66,33;\n--red-900: 123,52,30;\n--orange-100: 255,250,240;\n--orange-200: 255,235,200;\n--orange-300: 251,211,141;\n--orange-400: 246,173,84;\n--orange-500: 236,137,54;\n--orange-600: 221,106,31;\n--orange-700: 192,85,33;\n--orange-800: 155,66,33;\n--orange-900: 123,52,30;\n--yellow-100: 255,255,240;\n--yellow-200: 255,252,191;\n--yellow-300: 250,240,136;\n--yellow-400: 245,224,94;\n--yellow-500: 235,200,75;\n--yellow-600: 215,158,46;\n--yellow-700: 182,121,31;\n--yellow-800: 151,90,23;\n--yellow-900: 116,65,16;\n--green-100: 240,255,244;\n--green-200: 198,246,213;\n--green-300: 155,230,180;\n--green-400: 104,211,145;\n--green-500: 72,187,129;\n--green-600: 56,161,105;\n--green-700: 47,132,90;\n--green-800: 39,104,73;\n--green-900: 33,84,61;\n--teal-100: 230,255,250;\n--teal-200: 177,245,234;\n--teal-300: 129,231,217;\n--teal-400: 78,209,197;\n--teal-500: 55,179,172;\n--teal-600: 49,151,149;\n--teal-700: 46,122,123;\n--teal-800: 39,94,97;\n--teal-900: 35,78,82;\n--blue-100: 235,248,255;\n--blue-200: 190,227,248;\n--blue-300: 144,205,244;\n--blue-400: 98,179,237;\n--blue-500: 66,153,225;\n--blue-600: 49,130,206;\n--blue-700: 43,109,176;\n--blue-800: 44,82,130;\n--blue-900: 43,67,101;\n--indigo-100: 236,244,255;\n--indigo-200: 195,218,254;\n--indigo-300: 162,191,250;\n--indigo-400: 127,156,244;\n--indigo-500: 102,126,234;\n--indigo-600: 89,104,216;\n--indigo-700: 76,82,191;\n--indigo-800: 67,64,144;\n--indigo-900: 60,54,107;\n--purple-100: 250,245,255;\n--purple-200: 233,217,253;\n--purple-300: 215,188,250;\n--purple-400: 182,147,244;\n--purple-500: 159,121,234;\n--purple-600: 128,90,213;\n--purple-700: 108,71,193;\n--purple-800: 85,60,154;\n--purple-900: 67,51,122;\n--pink-100: 255,245,247;\n--pink-200: 255,214,226;\n--pink-300: 251,182,206;\n--pink-400: 245,136,179;\n--pink-500: 237,99,166;\n--pink-600: 214,63,140;\n--pink-700: 184,50,128;\n--pink-800: 151,39,109;\n--pink-900: 112,35,89;\n--shadow-color: 0,0,0;\n--shadow-opacity: 0.13;\n--ease: cubic-bezier(0.23, 1, 0.32, 1);\n--ease-in: cubic-bezier(0.4, 0, 1, 1);\n--ease-out: cubic-bezier(0, 0, 0.2, 1);\n--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);\n--sans: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n--serif: Georgia, Cambria, "Times New Roman", Times, serif;\n--mono: Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;\n}\n',a+="\n.sans\t{font-family: var(--sans)}\n.serif {font-family: var(--serif)}\n.mono\t{font-family: var(--mono)}\n.transform {\n  --translate-x: 0; --translate-y: 0; --rotate: 0; --skew-x: 0; --skew-y: 0; --scale-x: 1; --scale-y: 1;\n  transform: translateX(var(--translate-x)) translateY(var(--translate-y)) rotate(var(--rotate)) skewX(var(--skew-x)) skewY(var(--skew-y)) scaleX(var(--scale-x)) scaleY(var(--scale-y));\n}\n.smoothing { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }\n.smoothing-auto { -webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto; }\n.outline-none {outline:none}\n@keyframes fbc-spin { 0% {transform: rotate(0deg);} 100% {transform: rotate(359deg);}}\n\n:root {\n  --mini-scrollbar-color: 150,151,155;\n  --mini-scrollbar-bg: 100,101,105;\n  --mini-scrollbar-bg-opacity: 0;\n  --mini-scrollbar-color-opacity:.45;\n  --mini-scrollbar-hover: 150,151,155;\n  --mini-scrollbar-hover-opacity:.65;\n  --mini-scrollbar-size: 6px;\n}\n.mini-scrollbar {\n  -webkit-overflow-scrolling: touch;\n}\n.mini-scrollbar::-webkit-scrollbar {\n  width: var(--mini-scrollbar-size);\n  height: var(--mini-scrollbar-size);\n}\n.mini-scrollbar::-webkit-scrollbar-track {\n  background: rgba(var(--mini-scrollbar-bg), var(--mini-scrollbar-bg-opacity));\n}\n.mini-scrollbar::-webkit-scrollbar-thumb {\n  border-radius: 0px;\n  background: rgba(var(--mini-scrollbar-color), var(--mini-scrollbar-color-opacity));\n}\n.mini-scrollbar::-webkit-scrollbar-thumb:hover {\n  background: rgba(var(--mini-scrollbar-hover), var(--mini-scrollbar-hover-opacity));\n}\n.mini-scrollbar-hidden::-webkit-scrollbar-thumb {\n  background: rgba(100, 100, 100, 0) !important;\n}\n\n",s||(a+="\nhtml{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}\n\nblockquote,dl,dd,h1,h2,h3,h4,h5,h6,figure,p,pre {\n  margin: 0;\n  font-size: 1em;\n}\nh1,h2,h3,h4,h5,h6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\na {\n  text-decoration:none;\n}\nol,ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\nimg, image {\n  object-fit: cover;\n  object-position: 50% 50%;\n}\nimg,svg,video,canvas,audio,iframe,embed,object {\n  display: block;\n  vertical-align: middle;\n}\n\n*,\n*::before,\n*::after {\n  border-width: 0;\n  border-style: solid;\n  border-color: currentColor;\n}\ntable {border-collapse: collapse}\nbody {padding:0px;margin:0px;font-family: var(--sans);}\n* {box-sizing: border-box; outline:0;-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;}\n");var b={center:"center",start:"flex-start",end:"flex-end",between:"flex-between",around:"flex-around",auto:"auto",baseline:"baseline",stretch:"stretch"},m=["primary","white","black","gray","red","orange","yellow","green","teal","blue","indigo","purple","pink"],g="";g+="--fbc-0: 0%";for(var x=1;x<=12;x++)g+="--fbc-"+x+": "+(100*x/12).toFixed(6)+"%; ";a+=":root{"+g+"}";function h(e,o){a+="."+e+"\\!{"+o+"}",E+=".pc\\:"+e+"\\!{"+o+"}",p&&(k+=".sm\\:"+e+"\\!{"+o+"}"),f&&(E+=".md\\:"+e+"\\!{"+o+"}"),d&&(z+=".lg\\:"+e+"\\!{"+o+"}"),u&&(j+=".xl\\:"+e+"\\!{"+o+"}"),E+=".hover\\:"+e+":hover\\!{"+o+"}",["focus","active"].forEach(function(n){a+="."+n+"\\:"+e+":"+n+"\\!{"+o+"} ",E+=".pc\\:"+n+"\\:"+e+":"+n+"\\!{"+o+"}",p&&(k+=".sm\\:"+n+"\\:"+e+":"+n+"\\!{"+o+"}"),f&&(E+=".md\\:"+n+"\\:"+e+":"+n+"\\!{"+o+"}"),d&&(z+=".lg\\:"+n+"\\:"+e+":"+n+"\\!{"+o+"}"),u&&(j+=".xl\\:"+n+"\\:"+e+":"+n+"\\!{"+o+"}")})}function w(n,e){E+=".hover\\:"+n+":hover{"+e+"}",E+=".group:hover .group\\:hover\\:"+n+"{"+e+"}"}function v(e,o){["focus","active"].forEach(function(n){a+="."+n+"\\:"+e+":"+n+"{"+o+"} ",a+=".group:"+n+" .group\\:"+n+"\\:"+e+"{"+o+"} ",E+=".pc\\:"+n+"\\:"+e+":"+n+"{"+o+"}",p&&(k+=".sm\\:"+n+"\\:"+e+":"+n+"{"+o+"}"),f&&(E+=".md\\:"+n+"\\:"+e+":"+n+"{"+o+"}"),d&&(z+=".lg\\:"+n+"\\:"+e+":"+n+"{"+o+"}"),u&&(j+=".xl\\:"+n+"\\:"+e+":"+n+"{"+o+"}")})}function y(t,r){[["first","first-child"],["last","last-child"],["odd","nth-child(odd)"]].forEach(function(n){var e=n[0],o=n[1];a+="."+e+"\\:"+t+":"+o+"{"+r+"} ",E+=".pc\\:"+e+"\\:"+t+":"+o+"{"+r+"}",p&&(k+=".sm\\:"+e+"\\:"+t+":"+o+"{"+r+"}"),f&&(E+=".md\\:"+e+"\\:"+t+":"+o+"{"+r+"}"),d&&(z+=".lg\\:"+e+"\\:"+t+":"+o+"{"+r+"}"),u&&(j+=".xl\\:"+e+"\\:"+t+":"+o+"{"+r+"}")})}var k="",E="",z="",j="";function A(){var n=document.createElement("style");n.type="text/css",a+="@media (min-width:"+e+"){"+k+"}@media (min-width:"+o+"){"+E+"}@media (min-width:"+t+"){"+z+"}@media (min-width:"+r+"){"+j+"}",n.innerText=a,document.head.appendChild(n),k=E=a=""}function C(i){l.forEach(function(n){i("translate-x-"+n,"--translate-x:var(--"+n+")"),i("translate-y-"+n,"--translate-y:var(--"+n+")"),i("translate-x--"+n,"--translate-x:calc(0px - var(--"+n+"))"),i("translate-y--"+n,"--translate-y:calc(0px - var(--"+n+"))")}),c.forEach(function(n){i("translate-x-"+n,"--translate-x:var(--pt-"+n+")"),i("translate-y-"+n,"--translate-y:var(--pt-"+n+")"),i("translate-x--"+n,"--translate-x:calc(0px - var(--pt-"+n+"))"),i("translate-y--"+n,"--translate-y:calc(0px - var(--pt-"+n+"))")});for(var n=0;n<=12;n++)i("translate-x-"+n+"\\/12","--translate-x:var(--fbc-"+n+");"),i("translate-y-"+n+"\\/12","--translate-y:var(--fbc-"+n+")"),i("translate-x--"+n+"\\/12","--translate-x:calc(0px - var(--fbc-"+n+"));"),i("translate-y--"+n+"\\/12","--translate-y:calc(0px - var(--fbc-"+n+"))");for(n=0;n<=201;n+=5){i("scale-"+n,"--scale-x:"+(t=n?n/100:0)+";--scale-y:"+t),i("scale-x-"+n,"--scale-x: "+t),i("scale-y-"+n,"--scale-y: "+t),i("scale-x--"+n,"--scale-x: -"+t),i("scale-y--"+n,"--scale-y: -"+t)}for(n=0;n<=36;n++)i("rotate-"+10*n,"--rotate:"+10*n+"deg"),i("rotate--"+10*n,"--rotate:-"+10*n+"deg");for(n=0;n<=101;n+=5)i("skew-x-"+n,"--skew-x:"+n+"deg"),i("skew-y-"+n,"--skew-y:"+n+"deg");i("border-box","box-sizing: border-box"),i("content-box","box-sizing: content-box"),["right","left","none","both"].forEach(function(n){i("float-"+n,"float: "+n),i("clear-"+n,"clear: "+n)}),["contain","cover","fill","none","scale-down"].forEach(function(n){i("object-"+n,"object-fit: "+n)}),["auto","default","pointer","pointer","text","move","not-allowed"].forEach(function(n){i("cursor-"+n,"cursor: "+n)});for(var e=0;e<=4;e++)for(var o=0;o<=4;o++)i("bg-"+(e*=25)+"-"+(o*=25),"background-position:"+e+"% "+o+"%"),i("object-"+e+"-"+o,"object-position:"+e+"% "+o+"%"),i("orign-"+25*e+"-"+25*o,"transform-orign:"+25*e+"% "+25*o+"%");["repeat","no-repeat","repeat-x","repeat-y","round","space"].forEach(function(n){i("bg-"+n,"background-repeat:"+n)}),["auto","cover","contain"].forEach(function(n){i("bg-"+n,"background-size:"+n)}),["none","auto"].forEach(function(n){i("events-"+n,"pointer-events:"+n)}),["none","auto","text","all"].forEach(function(n){i("select-"+n,"user-select:"+n)}),i("fill-current","fill: currentColor"),i("stroke-current","stroke: currentColor"),[["none","none"],["both","both"],["x","vertical"],["y","horizontal"]].forEach(function(n){i("resize-"+n[0],"resize:"+n[1])}),["auto","hidden","visible","scroll","auto"].forEach(function(n){i("overflow-"+n,"overflow:"+n)}),[["x","auto"],["y","auto"],["x","hidden"],["y","hidden"],["x","visible"],["y","visible"],["x","scroll"],["y","scroll"]].forEach(function(n){i("overflow-"+n[0]+"-"+n[1],"overflow-"+n[0]+":"+n[1])}),i("scrolling-touch","\t-webkit-overflow-scrolling:touch"),i("scrolling-auto","\t-webkit-overflow-scrolling:auto"),["static","fixed","absolute","relative","sticky"].forEach(function(n){i(""+n,"position: "+n)}),i("visible","visibility:visible"),i("hidden","visibility:hidden"),i("appearance-none","appearance:none; -moz-appearance:none;-webkit-appearance:none;"),[["row","row"],["row-r","row-reverse"],["col","column"],["col-r","column-reverse"]].forEach(function(n){var e=n[0],o=n[1];i(e,"display:flex; flex-direction:"+o)}),["nowrap","wrap","wrap-r"].forEach(function(n){i("flex-"+n,"flex-wrap:"+n)}),i("flex-1","flex:1 1 0%"),i("flex-0","flex:0 1 auto");for(var t=0;t<=12;t++)for(var r=0;r<=1;r++)i("flex-"+t+"-"+r,"flex:"+t+" "+r+" 0%"),i("flex-"+t+"-"+r+"-auto","flex:"+t+" "+r+" auto");i("flex-none","flex: none"),[0,1].forEach(function(n){i("flex-grow-"+n,"flex-grow:"+n),i("flex-shrink-"+n,"flex-shrink:"+n)});for(n=-2;n<=12;n++)i("order-"+n,"order: "+n),i("grid-cols-"+n,"\tgrid-template-columns: repeat("+n+", minmax(0,"+n+"fr));"),i("grid-rows-"+n,"\tgrid-template-rows: repeat("+n+",minmax(0, "+n+"fr));");i("order-first","order: -9999"),i("order-last","order: 9999");for(e=-2;e<=13;e++)for(o=-2;o<=13;o++)12===e&&(e="auto"),13===o&&(o="auto"),i("row-${x}-${y}","grid-row-start: "+e+";grid-row-end: "+o),i("col-${x}-${y}","grid-column-start: "+e+";grid-column-end: "+o);i("grid-cols-none","\tgrid-template-columns:none"),i("grid-rows-none","\tgrid-template-rows:none"),[["row","row"],["col","column"],["row-d","row dense"],["col-d","column dense"]].forEach(function(n){i("grid-flow-"+n[0],"grid-auto-flow:"+n[1])}),["auto","start","center","end","stretch"].forEach(function(n){i("self-"+n,"align-self:"+b[n])}),["start","center","end","between","around"].forEach(function(e){i("content-"+e,"align-content:"+b[e]),["start","center","end","baseline","auto"].forEach(function(n){i(e+"-"+n,"justify-content: "+b[e]+"; align-items:"+b[n])})});var a=function(e){i("transition-"+50*e,"transition: all "+50*e+"ms var(--ease)"),i("spin-"+500*e,"animation: fbc-spin "+1*e+"s linear infinite"),i("delay-"+500*e,"transition-delay: "+50*e+"ms"),[["none","none"],["opacity","opacity"],["bg","background"],["shadow","box-shadow"],["transform","transform"]].forEach(function(n){i("transition-"+n[0]+"-"+50*e,"transition: "+n[1]+" "+50*e+"ms var(--ease)")})};for(n=0;n<=41;n++)a(n);[["ease","var(--ease)"],["ease-linear","linear"],["ease-in","var(--ease-in)"],["ease-out","var(--ease-out)"],["ease-in-out","var(--ease-in-out)"]].forEach(function(n){i(n[0],"--ease:"+n[1]+";")});for(n=0;n<=12;n++)i("f-"+n,"flex:"+n);for(n=0;n<=100;n++)i("z-"+10*n,"z-index:"+10*n);i("z-auto","z-index:zuto"),[["fs","font-size"]].forEach(function(e){c.forEach(function(n){return i(e[0]+"-"+n,e[1]+":var(--fs-"+n+")")})}),[["italic","italic"],["not-italic","normal"]].forEach(function(n){i(n[0],"font-style: "+n[1])}),["left","center","right","justify"].forEach(function(n){i("text-"+n,"text-align:"+n)}),i("text-transform-none","text-transform: none"),["uppercase","lowercase","capitalize"].forEach(function(n){i(n,"text-transform: "+n)}),["normal","nowrap","pre","pre-line","pre-wrap"].forEach(function(n){i("writespace-"+n,"white-space:"+n)}),["fixed","local","scroll"].forEach(function(n){i("bg-"+n,"background-attachment:"+n)}),i("break-normal","work-break:normal;overflow-wrap:normal;"),i("break-word","overflow-wrap:break-word;"),i("break-all","work-break:break-all;"),i("wrap-hidden","overflow:hidden;text-overflow:ellipsis;white-space:nowrap"),i("wrap","overflow:hidden;overflow-wra:break-word; word-break:break-all;"),["baseline","top","middle","bottom","text-top","text-bottom"].forEach(function(n){i("align-"+n,"vertical-align:"+n)});for(n=-5;n<=10;n++)i("letter-"+n,"letter-spacing:"+(.025*n).toFixed(3)+"em");i("line-none","line-height:1"),c.forEach(function(n){i("line-"+n,"line-height:var(--fs-"+n+")")});for(n=1;n<=9;n++)i("fw-"+n+"00","font-weight:"+n+"00");["none","disc","decimal"].forEach(function(n){i("list-"+n,"list-style-type:"+n)}),["inside","outside"].forEach(function(n){i("list-"+n,"list-style-position:"+n)}),[["underline","underline"],["none-underline","none"]].forEach(function(n){i(n[0],"text-decoration:"+n[1])}),["collapse","separate"].forEach(function(n){i("border-"+n,"border-collapse:"+n)}),[["left","left"],["top","top"],["right","right"],["bottom","bottom"]].forEach(function(e){l.forEach(function(n){i(e[0]+"-"+n,e[1]+":var(--"+n+")"),i(e[0]+"--"+n,e[1]+":calc(0px - var(--"+n+"))")}),c.forEach(function(n){i(e[0]+"-"+n,e[1]+":var(--pt-"+n+")"),i(e[0]+"--"+n,e[1]+":calc(0px - var(--pt-"+n+"))")});for(var n=0;n<=12;n++)i(e[0]+"-"+n+"\\/12",e[1]+":var(--fbc-"+n+")"),i(e[0]+"--"+n+"\\/12",e[1]+":calc(0px - var(--fbc-"+n+"))")}),[["w","width"],["min-w","min-width"],["max-w","max-width"],["h","height"],["min-h","min-height"],["max-h","max-height"],["p","padding"],["m","margin"]].forEach(function(e){l.forEach(function(n){return i(e[0]+"-"+n,e[1]+":var(--"+n+")")}),c.forEach(function(n){i(e[0]+"-"+n,e[1]+":var(--pt-"+n+")")});for(var n=0;n<=12;n++)i(e[0]+"-"+n+"\\/12",e[1]+":var(--fbc-"+n+")")}),[["stroke","stroke-width"],["radius","border-radius"],["radius-q","border-top-left-radius"],["radius-w","border-top-right-radius"],["radius-a","border-bottom-left-radius"],["radius-s","border-bottom-right-radius"]].forEach(function(e){c.forEach(function(n){i(e[0]+"-"+n,e[1]+":var(--li-"+n+")")})}),[["px","padding-left","padding-right"],["py","padding-top","padding-bottom"],["mx","margin-left","margin-right"],["my","margin-top","margin-bottom"],["gap","gap"],["row-gap","row-gap"],["col-gap","column-gap"]].forEach(function(e){c.forEach(function(n){return i(e[0]+"-"+n,e[1]+":var(--pt-"+n+"); "+e[2]+":var(--pt-"+n+")")})}),[["pt","padding-top"],["pb","padding-bottom"],["pl","padding-left"],["pr","padding-right"],["mt","margin-top"],["mb","margin-bottom"],["ml","margin-left"],["mr","margin-right"]].forEach(function(e){c.forEach(function(n){i(e[0]+"-"+n,e[1]+": var(--pt-"+n+")"),i(e[0]+"--"+n,e[1]+": calc(0px - var(--pt-"+n+"))")})}),[["b","border"],["bt","border-top"],["bb","border-bottom"],["bl","border-left"],["br","border-right"],["outline","outline"]].forEach(function(e){c.forEach(function(n){i(e[0]+"-"+n,e[1]+"-width: var(--li-"+n+"); "+e[1]+"-style: solid;")}),["solid","dotted","dashed","double","none"].forEach(function(n){i(e[0]+"-"+n,e[1]+"-style: "+n)})}),i("shadow"," box-shadow: 0 1px 3px 0 rgba(var(--shadow-color), var(--shadow-opacity)), 0 1px 2px 0 rgba(var(--shadow-color), calc(var(--shadow-opacity) / 2));"),[["xs","0 0 0 1px","0 0 0 0"],["sm","0 1px 2px 0","0 0 0 0"],["md","0 4px 6px -1px","0 2px 4px -1px"],["lg","0 10px 15px -3px","0 4px 6px -2px"],["xl","0 20px 25px -5px","0 10px 10px -5px"],["2xl","0 25px 50px -12px","0 0 0 0"],["inner","inset 0 2px 4px 0","0 0 0 0"],["outline","0 0 0 3px","0 0 0 0"]].forEach(function(n){var e=n[0],o=n[1],t=n[2];i("shadow-"+e,"box-shadow: "+o+" rgba(var(--shadow-color), var(--shadow-opacity)), "+t+" rgba(var(--shadow-color), calc(var(--shadow-opacity) / 2));")}),[["bg","background-color"],["b","border-color"],["c","color"],["placeholder","color"],["shadow","shadow-color"],["outline","outline-color"]].forEach(function(n){var r=n[0],a=n[1];m.forEach(function(n){var e="white"===n||"black"===n;if("shadow"===r)if(e)i(r+"-"+n,"--"+r+"-color:var(--"+n+");");else for(var o=1;o<=9;o++)i(r+"-"+n+"-"+o+"00","--"+r+"-color:var(--"+n+"-"+o+"00);");else{var t="";if("placeholder"===r&&(t="::-webkit-input-placeholder"),e)i(r+"-"+n+t,"--"+r+"-opacity: 1; "+a+":rgba(var(--"+n+"), var(--"+r+"-opacity));");else for(o=1;o<=9;o++)i(r+"-"+n+"-"+o+"00"+t,"--"+r+"-opacity: 1; "+a+":rgba(var(--"+n+"-"+o+"00), var(--"+r+"-opacity));")}});for(var e=0;e<=100;e+=5)i(r+"-opacity-"+e,"--"+r+"-opacity: "+(0==e?0:e/100))});for(n=0;n<=100;n+=5)i("opacity-"+n,"opacity: "+(0===n?0:n/100));i("sr-only","position: absolute;width: 1px;height: 1px;padding: 0;margin: -1px;overflow: hidden;clip: rect(0, 0, 0, 0);white-space: nowrap;border-width: 0;"),i("not-sr-only","position: static;width: auto;height: auto;padding: 0;margin: 0;overflow: visible;clip: auto;white-space: normal;"),i("table-fixed","table-layout: fixed"),i("table-auto","table-layout: auto"),["none","block","flow-root","inline-block","flex","inline-flex","grid","inline-grid","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row"].forEach(function(n){i(n,"display: "+n)})}C(function(n,e){a+="."+n+"{"+e+"}",E+=".pc\\:"+n+"{"+e+"}",p&&(k+=".sm\\:"+n+"{"+e+"}"),f&&(E+=".md\\:"+n+"{"+e+"}"),d&&(z+=".lg\\:"+n+"{"+e+"}"),u&&(j+=".xl\\:"+n+"{"+e+"}")}),a+='.clearfix {\n    &::after {\n      content: "";\n      display: table;\n      clear: both;\n    }\n    }',A(),console.timeEnd("fbc-base"),setTimeout(function(){setTimeout(function(){console.time("fbc-hover"),C(w),A(),console.timeEnd("fbc-hover"),setTimeout(function(){console.time("fbc-active"),C(v),A(),console.timeEnd("fbc-active"),setTimeout(function(){console.time("fbc-import"),C(h),A(),console.timeEnd("fbc-import"),i&&setTimeout(function(){console.time("fbc-child"),C(y),A(),console.timeEnd("fbc-child")})},100)})})})});
//# sourceMappingURL=index.js.map
