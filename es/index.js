var F={"(":1,";":1,":":1,"=":1},p=({css:e,name:n="",media:s="",mediaName:r="",pesudo:a="",value:t=""})=>{if(!n||!t)return;let i=t[t.length-1];if(F[i])return;if(i==="!"&&(t=t.replace(/(!$)/," !important")),/\~/.test(t)){let w=t.split("~").map($=>$?`"${$}"`:"").join(" ");t=" "+w,t+=";"}t=t.replace(/calc\((.*?)\)/g,c=>(c=c.replace(/(-|\+|\*|\/)/g,w=>" "+w+" "),c)),t=t.replace(/\|/g," "),t=t.replace(/var\((.*?)\)/g,c=>c.replace(/(var\(|\))/g,"")),t=t.replace(/--([a-zA-Z0-9_-]*)/g,c=>`var(${c})`),t=t.replace(/\^\^\^/g,",");let o=e.replace(/(\:|#|\*|!|,|\.|>|<|@|~|%|\||\$|\{|\}|\[|\]|\(|\)|\+|\*|\/)/g,c=>"\\"+c);/^(\w|\*)/.test(a)&&(a=" "+a),a=a.replace(/\|/g," ");let d=document.createElement("style");if(s?d.textContent=`${s} {.${o}${a}{${n}:${t}}}`:d.textContent=`.${o}${a}{${n}:${t}}`,d.setAttribute("flavor-css",""),document.head.append(d),r){let c=document.createElement("style");c.textContent=`.media-${r} .${o}${a}{${n}:${t}}`,c.setAttribute("flavor-css",""),document.head.append(c)}};var l={},g=e=>{!e||(e=e.replace(`
`,""),e=e.replace(/(\/\/\s)/g,"//"),e.trim().split(";").forEach(n=>{let[s,...r]=n.split(":"),a=r.join(":");s=s.trim(),s&&a.split(" ").filter(Boolean).forEach(i=>{T(s,i)})}))},E={},q=Array(10).fill(0).map(e=>new RegExp(`(\\$${e+1})`,"g")),T=(e,n)=>{let s=`${e}___${n}`;E[s]||(E[s]=!0,l[e]||(l[e]=[]),l[e].push(r=>{let a=r.split(","),t=n;return a.forEach((i,o)=>{t=t.replace(q[o],i)}),t}))};var m=navigator.userAgent.toLocaleLowerCase(),C=/(?:android)/.test(m),b=/(?:firefox)/.test(m),H=/(?:chrome|crios)/.test(m),j=/(safari)/.test(m),_=/(?:ipad|playbook)/.test(m)||C&&!/(?:mobile)/.test(m)||b&&/(?:tablet)/.test(m),L=/(?:iphone)/.test(m)&&!_,A=!L&&!C,S=!A,B=S&&/(micromessenger|wechat)/.test(m),f={android:C,firefox:b,chrome:H,tablet:_,ios:L,wechat:B,desktop:A,phone:S,safari:j};var x={all:"",print:"@media print",speech:"@media speech",fine:"@media (pointer: fine)",dark:"@media (prefers-color-scheme: dark)",xs:"@media screen and (min-width: 480px)",sm:"@media screen and (min-width: 640px)",md:"@media screen and (min-width: 768px)",lg:"@media screen and (min-width: 1024px)",xl:"@media screen and (min-width: 1280px)",xxl:"@media screen and (min-width: 1536px)","in-xs":"@media screen (max-width:479px) and (min-width: 0px)","in-sm":"@media screen (max-width:767px) and (min-width: 479px)","in-md":"@media screen (max-width:1023px) and (min-width: 767px)","in-lg":"@media screen (max-width:1279px) and (min-width: 1023px)","in-xl":"@media screen (max-width:1535px) and (min-width: 1279px)","in-xxl":"@media screen (max-width:9999px) and (min-width: 1535px)"};function O(e,n){e.comp=l[n],e.compName=n}function V(e,n){x[n]?(e.media=x[n],e.mediaName=n):f[n]!==void 0&&(e.media=`@media screen and (min-width: ${f[n]?"0px":"9999px"})`,e.mediaName=n)}function D(e,n){!n||(e.comp&&(n=n.replace(/\((.*?)\)/g,s=>s.replace(/\,/g,"^^^"))),e.value=n)}function N(e,n){let s="_$$_"+e,r={css:n||e,compName:"",comp:void 0,pesudo:"",pesudoName:"",media:"",mediaName:"",name:"",value:"",query:""};if(!e||e[0]==="/"&&e[1]==="/")return r;let a=e.split(":");V(r,a[0]),r.mediaName&&a.shift();let t=a.length,i=a[t-1],o=t>=2?a[t-2]:"";t===1&&(o=i,i="");let d=[...a];return o?(r.name=o,O(r,o),D(r,i),d.pop(),d.pop()):(r.name=i,d.pop()),r.pesudo=d.join(":"),r.pesudoName=r.pesudo,console.log(r),r}var u={},h=e=>{let n="-"+e;if(u[n])return e;if(u[n]=!0,!!/:/.test(e))return e.split(" ").filter(Boolean).forEach(s=>{if(u[s])return;u[s]=!0;let r=N(s);r.comp?r.comp.forEach(a=>a(r.value).split(" ").filter(Boolean).forEach(t=>{p(N(t,s))})):p(r)}),e};var k="[class]";function I(e){let n="";if(e.tagName==="TEMPLATE"){let s=e.content.cloneNode(!0);s&&(n=s.textContent)}else n=e.textContent;g(n)}function y(e){!e||e.className&&typeof e.className=="string"&&h(e.className)}var z=()=>{let e=(s,...r)=>{let a=s.length;for(let t=0;t<a;t++){let i=s[t];if(i.type==="childList"){let o=i.target;if(o.__flavorIgnore&&o.closest("[flavor-ignore]")&&!o.getAttribute("flavor-ignore")){o.__flavorIgnore=!0;return}y(o),i.addedNodes.length&&o.querySelectorAll(k).forEach(y)}else i.type==="attributes"&&y(i.target)}};new MutationObserver(e).observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class"],characterData:!1,attributeOldValue:!1,characterDataOldValue:!1})};window.addEventListener("load",()=>{document.querySelectorAll("[flavor]").forEach(I),document.body.querySelectorAll(k).forEach(e=>{y(e)}),z()});var M={addStyle:p,os:f,addCss:h,addComponents:g,mediaList:x};window.flavorcss=M;var P=M;export{P as default};
