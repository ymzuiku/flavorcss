function h(t){let e=document.createElement("style");e.textContent=t,e.setAttribute("flavor-css",""),document.head.appendChild(e)}var f={},p={};var o={all:"",print:"@media print",speech:"@media speech",fine:"@media (pointer: fine)",dark:"@media (prefers-color-scheme: dark)",light:"@media (prefers-color-scheme: light)",xs:"@media screen and (min-width: 480px)",sm:"@media screen and (min-width: 640px)",md:"@media screen and (min-width: 768px)",lg:"@media screen and (min-width: 1024px)",xl:"@media screen and (min-width: 1280px)",xxl:"@media screen and (min-width: 1536px)","in-xs":"@media screen (max-width:479px) and (min-width: 0px)","in-sm":"@media screen (max-width:767px) and (min-width: 479px)","in-md":"@media screen (max-width:1023px) and (min-width: 767px)","in-lg":"@media screen (max-width:1279px) and (min-width: 1023px)","in-xl":"@media screen (max-width:1535px) and (min-width: 1279px)","in-xxl":"@media screen (max-width:9999px) and (min-width: 1535px)"};var x={after:!0,backdrop:!0,before:!0,cue:!0,"first-letter":!0,"first-line":!0,"grammar-error":!0,marker:!0,placeholder:!0,selection:!0,slotted:!0,"spelling-error":!0},g={active:!0,"any-link":!0,blank:!0,checked:!0,current:!0,default:!0,defined:!0,disabled:!0,drop:!0,empty:!0,enabled:!0,first:!0,"first-child":!0,"first-of-type":!0,fullscreen:!0,future:!0,focus:!0,"focus-visible":!0,"focus-within":!0,host:!0,hover:!0,indeterminate:!0,"in-range":!0,invalid:!0,"last-child":!0,"last-of-type":!0,left:!0,link:!0,"local-link":!0,"only-child":!0,"only-of-type":!0,optional:!0,"out-of-range":!0,past:!0,"placeholder-shown":!0,"read-only":!0,"read-write":!0,required:!0,right:!0,root:!0,scope:!0,target:!0,"target-within":!0,"user-invalid":!0,valid:!0,visited:!0};function m(t){return g[t]?":"+t:x[t]?"::"+t:" "+t}function n(t){return t.replace(/(\:|#|\*|!|,|\.|>|<|@|~|%|\^|\||\$|\{|\}|\[|\]|\(|\)|\+|\*|\/)/g,e=>"\\"+e)}function s(t){return t.replace(/(--[a-zA-Z0-9\-]*)/g,e=>`var(${e})`).split("|").join(" ").replace("!"," !important")}function w(t){let e=t.split(":"),a=e.length;if(a===1)return"";if(a===2)return`.${n(t)} { ${e[0]}: ${s(e[1])}; }`;if(a===3){let r=o[e[0]];return r?`${r} { .${n(t)} { ${e[1]}: ${s(e[2])}; } }`:`.${n(t)}${m(e[0])} { ${e[1]}: ${s(e[2])}; }`}if(a===4){let r=o[e[0]],i=o[e[1]];return r?i?`${r} { ${i} { .${n(t)} { ${e[2]}: ${s(e[3])}; } } }`:`${r} { .${n(t)}${m(e[1])} { ${e[2]}: ${s(e[3])}; } }`:i?`${i} { .${n(t)} ${e[0]} { ${e[2]}: ${s(e[3])}; } }`:`.${n(t)} ${e[0]}${m(e[1])} { ${e[2]}: ${s(e[3])}; }`}if(a===5){let r=o[e[0]],i=o[e[1]];if(r&&i)return`${r} { ${i} { .${n(t)}${m(e[2])} { ${e[3]}: ${s(e[4])}; } } }`;let d=o[e[2]];return i&&d?`${i} { ${d} { .${n(t)} ${e[0]} { ${e[3]}: ${s(e[4])}; } } }`:`${i} { .${n(t)} ${e[0]}${m(e[2])} { ${e[3]}: ${s(e[4])}; } }`}if(a===6){let r=o[e[1]],i=o[e[2]];if(r&&i)return`${r} { ${i} { .${n(t)} ${e[0]}${m(e[3])} { ${e[4]}: ${s(e[5])}; } } }`}return""}function l(t){if(f[t])return;f[t]=!0,t.replace(`
`," ").split(" ").map(a=>a.trim()).filter(Boolean).forEach(a=>{if(p[a])return;p[a]=!0;let r=w(a);r&&h(r)})}var b=()=>{let t=(a,...r)=>{let i=a.length;for(let d=0;d<i;d++){let c=a[d];if(c.type==="childList"){let u=c.target;if((u.__flavorIgnore||u.closest("[flavor-ignore]"))&&!u.getAttribute("flavor-ignore")){u.__flavorIgnore=!0;return}u.className&&l(u.className),c.addedNodes.length&&u.querySelectorAll("[class]").forEach(y=>l(y.className))}else c.type==="attributes"&&c.target.className&&l(c.target.className)}};new MutationObserver(t).observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class","flavor-css"],characterData:!1,attributeOldValue:!1,characterDataOldValue:!1})};function $(){window.addEventListener("load",()=>{document.querySelectorAll("[class]").forEach(t=>l(t.className)),b()})}window.flavorcss=$;window.flavorParse=l;module.exports={obserer:$,parseClass:l};
