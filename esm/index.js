function f(t){let e=document.createElement("style");e.textContent=t,e.setAttribute("flavor-css",""),document.head.appendChild(e)}var x='*,:after,:before{box-sizing:border-box}html{-moz-tab-size:4;-o-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"}hr{height:0;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Consolas,"Liberation Mono",Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}fieldset{margin:0;padding:0}ol,ul{list-style:none;margin:0;padding:0}html{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}body{font-family:inherit;line-height:inherit}*,:after,:before{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder,textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}';var h={},g={},b={d:"display",bg:"background",bgi:"background-image",gap:"grid-gap",pos:"position",ta:"text-align",area:"display:grid; grid-area",areas:"display:grid; grid-template-areas",rows:"display:grid; grid-template-rows",cols:"display:grid; grid-template-columns",wrap:"flex-wrap",flex:"flex-direction",jc:"justify-content",ji:"justify-items",js:"justify-self",ac:"align-content",ai:"align-items",as:"align-self",pc:"place-content",pi:"place-items",ps:"place-self",z:"z-index",c:"color",shadow:"box-shadow",radius:"border-radius",flow:"overflow",b:"border",br:"border-right",bt:"border-top",bb:"border-bottom",bl:"border-left",p:"padding",pr:"padding-right",pt:"padding-top",pb:"padding-bottom",pl:"padding-left",m:"margin",mr:"margin-right",mt:"margin-top",mb:"margin-bottom",ml:"margin-left",h:"height","min-h":"min-height","max-h":"max-height",w:"width","min-w":"min-width","max-w":"max-width",font:"font-size",weight:"font-weight",family:"font-family","flow-x":"overflow-x","flow-y":"overflow-y"};var s={all:"",print:"@media print",speech:"@media speech",fine:"@media (pointer: fine)",dark:"@media (prefers-color-scheme: dark)",light:"@media (prefers-color-scheme: light)",xs:"@media screen and (min-width: 480px)",sm:"@media screen and (min-width: 640px)",md:"@media screen and (min-width: 768px)",lg:"@media screen and (min-width: 1024px)",xl:"@media screen and (min-width: 1280px)",xxl:"@media screen and (min-width: 1536px)","in-xs":"@media screen (max-width:479px) and (min-width: 0px)","in-sm":"@media screen (max-width:767px) and (min-width: 479px)","in-md":"@media screen (max-width:1023px) and (min-width: 767px)","in-lg":"@media screen (max-width:1279px) and (min-width: 1023px)","in-xl":"@media screen (max-width:1535px) and (min-width: 1279px)","in-xxl":"@media screen (max-width:9999px) and (min-width: 1535px)"};var y={after:!0,backdrop:!0,before:!0,cue:!0,"first-letter":!0,"first-line":!0,"grammar-error":!0,marker:!0,placeholder:!0,selection:!0,slotted:!0,"spelling-error":!0},w={active:!0,"any-link":!0,blank:!0,checked:!0,current:!0,default:!0,defined:!0,disabled:!0,drop:!0,empty:!0,enabled:!0,first:!0,"first-child":!0,"first-of-type":!0,fullscreen:!0,future:!0,focus:!0,"focus-visible":!0,"focus-within":!0,host:!0,hover:!0,indeterminate:!0,"in-range":!0,invalid:!0,"last-child":!0,"last-of-type":!0,left:!0,link:!0,"local-link":!0,"only-child":!0,"only-of-type":!0,optional:!0,"out-of-range":!0,past:!0,"placeholder-shown":!0,"read-only":!0,"read-write":!0,required:!0,right:!0,root:!0,scope:!0,target:!0,"target-within":!0,"user-invalid":!0,valid:!0,visited:!0};function c(t){if(h[t])return;h[t]=!0,t.split(" ").forEach(o=>{if(g[o])return;g[o]=!0;let r=k(o);r&&f(r)})}function p(t){return w[t]?":"+t:y[t]?"::"+t:" "+t}function n(t){return t.replace(/(\:|#|\*|!|,|\.|>|<|@|~|%|\^|\||\$|\{|\}|\[|\]|\(|\)|\+|\*|\/)/g,e=>"\\"+e)}function a(t){return b[t]||t}function l(t){return t.replace(/(--[a-zA-Z0-9\-]*)/g,e=>`var(${e})`).split("|").join(" ").replace("!"," !important")}function k(t){let e=t.split(":"),o=e.length;if(o===1)return"";if(o===2)return`.${n(t)} { ${a(e[0])}: ${l(e[1])}; }`;if(o===3){let r=s[e[0]];return r?`${r} { .${n(t)} { ${a(e[1])}: ${l(e[2])}; } }`:`.${n(t)}${p(e[0])} { ${a(e[1])}: ${l(e[2])}; }`}if(o===4){let r=s[e[0]],i=s[e[1]];return r?i?`${r} { ${i} { .${n(t)} { ${a(e[2])}: ${l(e[3])}; } } }`:`${r} { .${n(t)}${p(e[1])} { ${a(e[2])}: ${l(e[3])}; } }`:i?`${i} { .${n(t)} ${e[0]} { ${a(e[2])}: ${l(e[3])}; } }`:`.${n(t)} ${e[0]}${p(e[1])} { ${a(e[2])}: ${l(e[3])}; }`}if(o===5){let r=s[e[0]],i=s[e[1]];if(r&&i)return`${r} { ${i} { .${n(t)}${p(e[2])} { ${a(e[3])}: ${l(e[4])}; } } }`;let u=s[e[2]];return i&&u?`${i} { ${u} { .${n(t)} ${e[0]} { ${a(e[3])}: ${l(e[4])}; } } }`:`${i} { .${n(t)} ${e[0]}${p(e[2])} { ${a(e[3])}: ${l(e[4])}; } }`}if(o===6){let r=s[e[1]],i=s[e[2]];if(r&&i)return`${r} { ${i} { .${n(t)} ${e[0]}${p(e[3])} { ${a(e[4])}: ${l(e[5])}; } } }`}return""}var z=()=>{let t=(o,...r)=>{let i=o.length;for(let u=0;u<i;u++){let m=o[u];if(m.type==="childList"){let d=m.target;if((d.__flavorIgnore||d.closest("[flavor-ignore]"))&&!d.getAttribute("flavor-ignore")){d.__flavorIgnore=!0;return}d.className&&c(d.className),m.addedNodes.length&&d.querySelectorAll("[class]").forEach(v=>c(v.className))}else m.type==="attributes"&&m.target.className&&c(m.target.className)}};new MutationObserver(t).observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class","flavor-css"],characterData:!1,attributeOldValue:!1,characterDataOldValue:!1})};function $(){typeof window!="undefined"&&(f(x),window.addEventListener("load",()=>{document.querySelectorAll("[class]").forEach(t=>c(t.className)),z()}))}$();export{b as alias,$ as obserer};
