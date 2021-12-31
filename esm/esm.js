function $(t){let e=document.createElement("style");e.textContent=t,e.setAttribute("flavor-css",""),document.head.appendChild(e)}var f={},p={};var s={all:"",print:"@media print",speech:"@media speech",fine:"@media (pointer: fine)",dark:"@media (prefers-color-scheme: dark)",light:"@media (prefers-color-scheme: light)",xs:"@media screen and (min-width: 480px)",sm:"@media screen and (min-width: 640px)",md:"@media screen and (min-width: 768px)",lg:"@media screen and (min-width: 1024px)",xl:"@media screen and (min-width: 1280px)",xxl:"@media screen and (min-width: 1536px)","in-xs":"@media screen (max-width:479px) and (min-width: 0px)","in-sm":"@media screen (max-width:767px) and (min-width: 479px)","in-md":"@media screen (max-width:1023px) and (min-width: 767px)","in-lg":"@media screen (max-width:1279px) and (min-width: 1023px)","in-xl":"@media screen (max-width:1535px) and (min-width: 1279px)","in-xxl":"@media screen (max-width:9999px) and (min-width: 1535px)"};var h={after:!0,backdrop:!0,before:!0,cue:!0,"first-letter":!0,"first-line":!0,"grammar-error":!0,marker:!0,placeholder:!0,selection:!0,slotted:!0,"spelling-error":!0},x={active:!0,"any-link":!0,blank:!0,checked:!0,current:!0,default:!0,defined:!0,disabled:!0,drop:!0,empty:!0,enabled:!0,first:!0,"first-child":!0,"first-of-type":!0,fullscreen:!0,future:!0,focus:!0,"focus-visible":!0,"focus-within":!0,host:!0,hover:!0,indeterminate:!0,"in-range":!0,invalid:!0,"last-child":!0,"last-of-type":!0,left:!0,link:!0,"local-link":!0,"only-child":!0,"only-of-type":!0,optional:!0,"out-of-range":!0,past:!0,"placeholder-shown":!0,"read-only":!0,"read-write":!0,required:!0,right:!0,root:!0,scope:!0,target:!0,"target-within":!0,"user-invalid":!0,valid:!0,visited:!0};function m(t){return x[t]?":"+t:h[t]?"::"+t:" "+t}function a(t){return t.replace(/(\:|#|\*|!|,|\.|>|<|@|~|%|\^|\||\$|\{|\}|\[|\]|\(|\)|\+|\*|\/)/g,e=>"\\"+e)}function o(t){return t.replace(/(--[a-zA-Z0-9\-]*)/g,e=>`var(${e})`).split("|").join(" ").replace("!"," !important")}function g(t){let e=t.split(":"),i=e.length;if(i===1)return"";if(i===2)return`.${a(t)} { ${e[0]}: ${o(e[1])}; }`;if(i===3){let r=s[e[0]];return r?`${r} { .${a(t)} { ${e[1]}: ${o(e[2])}; } }`:`.${a(t)}${m(e[0])} { ${e[1]}: ${o(e[2])}; }`}if(i===4){let r=s[e[0]],n=s[e[1]];return r?n?`${r} { ${n} { .${a(t)} { ${e[2]}: ${o(e[3])}; } } }`:`${r} { .${a(t)}${m(e[1])} { ${e[2]}: ${o(e[3])}; } }`:n?`${n} { .${a(t)} ${e[0]} { ${e[2]}: ${o(e[3])}; } }`:`.${a(t)} ${e[0]}${m(e[1])} { ${e[2]}: ${o(e[3])}; }`}if(i===5){let r=s[e[0]],n=s[e[1]];if(r&&n)return`${r} { ${n} { .${a(t)}${m(e[2])} { ${e[3]}: ${o(e[4])}; } } }`;let d=s[e[2]];return n&&d?`${n} { ${d} { .${a(t)} ${e[0]} { ${e[3]}: ${o(e[4])}; } } }`:`${n} { .${a(t)} ${e[0]}${m(e[2])} { ${e[3]}: ${o(e[4])}; } }`}if(i===6){let r=s[e[1]],n=s[e[2]];if(r&&n)return`${r} { ${n} { .${a(t)} ${e[0]}${m(e[3])} { ${e[4]}: ${o(e[5])}; } } }`}return""}function u(t){return f[t]||(f[t]=!0,t.replace(`
`," ").split(" ").map(i=>i.trim()).filter(Boolean).forEach(i=>{if(p[i])return;p[i]=!0;let r=g(i);r&&$(r)})),t}typeof window!="undefined"&&u("flex-direction:column flex-direction:row flex-direction:column-reverse flex-direction:row-reverse");var w=()=>{let t=(i,...r)=>{let n=i.length;for(let d=0;d<n;d++){let c=i[d];if(c.type==="childList"){let l=c.target;if((l.__flavorIgnore||l.closest("[flavor-ignore]"))&&!l.getAttribute("flavor-ignore")){l.__flavorIgnore=!0;return}l.className&&u(l.className),c.addedNodes.length&&l.querySelectorAll("[class]").forEach(v=>u(v.className))}else c.type==="attributes"&&c.target.className&&u(c.target.className)}};new MutationObserver(t).observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class","flavor-css"],characterData:!1,attributeOldValue:!1,characterDataOldValue:!1})};function y(){window.addEventListener("load",()=>{document.querySelectorAll("[class]").forEach(t=>u(t.className)),w()})}export{u as flavor,y as flavorObserver};
