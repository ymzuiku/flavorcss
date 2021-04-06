var u={compMap:{"":{}},classNameCache:{}};var y,$=()=>{if(y)return y;let e=navigator.userAgent.toLocaleLowerCase(),t=/(?:android)/.test(e),r=/(?:firefox)/.test(e),m=/(?:chrome|crios)/.test(e),a=/(safari)/.test(e),i=/(?:ipad|playbook)/.test(e)||t&&!/(?:mobile)/.test(e)||r&&/(?:tablet)/.test(e),c=/(?:iphone)/.test(e)&&!i,n=!c&&!t,o=!n,s=o&&/(micromessenger|wechat)/.test(e),l=c&&window.screen.height>=812,p=window.location.href.indexOf("native")>-1;return y={isNeedSafeBottom:l,isNeedSafeTop:p,android:t,firefox:r,chrome:m,tablet:i,ios:c,wechat:s,pc:n,phone:o,safari:a},y};function z(e,t,r){e.comp=t[r],e.comp?e.compName=r:e.name=r}function j(e,t){w[t]?(e.media=w[t],e.mediaName=t):$()[t]!==void 0&&(e.media=`@media screen and (min-width: ${$()[t]?"0px":"9999px"})`,e.mediaName=t)}var w={all:"",print:"@media print",speech:"@media speech",dark:"@media (prefers-color-scheme: dark)",xs:"@media screen and (min-width: 480px)",sm:"@media screen and (min-width: 640px)",md:"@media screen and (min-width: 768px)",lg:"@media screen and (min-width: 1024px)",xl:"@media screen and (min-width: 1280px)",xxl:"@media screen and (min-width: 1536px)","in-xs":"@media screen (max-width:479px) and (min-width: 0px)","in-sm":"@media screen (max-width:767px) and (min-width: 479px)","in-md":"@media screen (max-width:1023px) and (min-width: 767px)","in-lg":"@media screen (max-width:1279px) and (min-width: 1023px)","in-xl":"@media screen (max-width:1535px) and (min-width: 1279px)","in-xxl":"@media screen (max-width:9999px) and (min-width: 1535px)"},S={};function O(e,t){!t||(e.comp&&(t=t.replace(/\((.*?)\)/g,r=>r.replace(/\,/g,"^^^"))),e.value=t)}function g(e,t){let r=e+"_$$_"+t,m=S[r];if(m)return m;let a={comp:void 0,compName:"",pesudo:"",pesudoName:"",media:"",mediaName:"",name:"",value:"",query:""};if(!t||t[0]==="/"&&t[1]==="/")return S[r]=a,a;let i=u.compMap[e]||{},c=t.split(":");j(a,c[0]),a.mediaName&&c.shift();let n=c.length,o=c[n-1],s=n>=2?c[n-2]:"",l=[...c];return i[o]?(a.comp=i[o],a.compName=o,l.pop()):s?(z(a,i,s),O(a,o),l.pop(),l.pop()):(a.name=o,l.pop()),a.pesudo=l.join(":"),a.pesudoName=a.pesudo,S[r]=a,a}var H={"(":1,";":1,":":1,"=":1},N=({css:e,name:t="",media:r="",mediaName:m="",pesudo:a="",group:i=""})=>{if(!e)return;let c=`^sty_${e}_${t}_${r}_${a}_${i}`;if(u.classNameCache[c])return;u.classNameCache[c]=!0;let n=g(i,e),o=n.value;if(!o)return;let s=o[o.length-1];if(H[s])return;s==="!"&&(o=o.replace(/(!$)/," !important")),n.media&&(r=n.media),n.mediaName&&(m=n.mediaName),n.pesudo&&(a=n.pesudo);let l=o.split("~");l.length>1&&(o=" "+l.map(f=>`"${f}"`).join(" "),o+=";"),o=o.replace(/calc\((.*?)\)/g,f=>(f=f.replace(/(-|\+|\*|\/)/g,B=>" "+B+" "),f)),o=o.replace(/\|/g," "),o=o.replace(/var\((.*?)\)/g,f=>f.replace(/(var\(|\))/g,"")),o=o.replace(/--([a-zA-Z0-9_-]*)/g,f=>`var(${f})`),o=o.replace(/\^\^\^/g,",");let p=(t||e).replace(/(\:|#|\*|!|,|\.|>|<|@|~|%|\||\$|\{|\}|\[|\]|\(|\)|\+|\*|\/)/g,f=>"\\"+f),d=i?`.\\*${i}`:"";/^(\w|\*)/.test(a)&&(a=" "+a),a=a.replace(/\|/g," ");let h=document.createElement("style");if(r?h.textContent=`${r} {.${p}${d}${a}{${n.name}:${o}}}`:h.textContent=`.${p}${d}${a}{${n.name}:${o}}`,h.setAttribute("flavor-css",""),document.head.append(h),m){let f=document.createElement("style");f.textContent=`.media-${m} .${p}${d}${a}{${n.name}:${o}}`,f.setAttribute("flavor-css",""),document.head.append(f)}};var A={},v=e=>{let t=A[e];if(t)return t;let r=[];e=e.replace(/\n/g," ");let m=[],a=e.match(/\*(.\w?)\s/g),i={};if(a)a.forEach(o=>{if(o){let s=o.replace(/(\*|\s)/g,"");s&&(m.push(s),i[s]=!0)}});else return r.push({group:"",cssItem:e}),A[e]=r,r;let c=/\*(.*?)\s/g,n=e.split(c);return n.forEach((o,s)=>{if(o=o.trim(),!o)return;let l=n[s+1];s===0&&!i[o]&&r.push({cssItem:o,group:""}),i[o]&&l&&!i[l]&&r.push({cssItem:l.trim(),group:o})}),A[e]=r,r};var b=(e,t="",r="",m="",a="",i="")=>{let c=`^parser_${e}_${t}_${r}_${m}_${a}`;return u.classNameCache[c]||(u.classNameCache[c]=!0,v(e).forEach(({cssItem:n,group:o})=>{n.split(" ").filter(Boolean).forEach(s=>{let l=o,p=g(o,s);if(p.comp||(p=g("",s),l=""),p.comp){let d=p.comp(p.value.split(","));b(d,s,p.media,p.mediaName,p.pesudo,l)}else N({css:s,name:t,media:r,mediaName:m,pesudo:a,group:i})})})),e};var k={},G=(e,t,r)=>{let m=`^group_${e}_${t}_${r}`;k[m]||(k[m]=!0,u.compMap[e]||(u.compMap[e]={}),u.compMap[e][t]=a=>{let i=r;a.forEach((s,l)=>{i=i.replace(new RegExp(`(\\$${l+1})`,"g"),s)});let c=a[a.length],n=s=>{i.indexOf("$"+s)>-1&&(i=i.replace(new RegExp(`(\\$${s+1})`,"g"),c),n(s+1))};n(r.length+1);let o="";return v(i).forEach(({cssItem:s,group:l})=>{s.split(" ").forEach(p=>{let d=g(l,p);d.comp||(d=g(e,p),!d.comp&&e!==""&&l!==""&&(d=g("",p))),d.comp&&d.compName!==t?d.comp(d.value.split(",")).split(" ").forEach(f=>{o+=[d.query,d.mediaName,d.pesudoName,f].filter(Boolean).join(":")+" "}):o+=p+" "})}),o})};var C=(e,t)=>{!t||(t=t.replace(`
`,""),t=t.replace(/(\/\/\s)/g,"//"),t.trim().split(";").forEach(r=>{let[m,...a]=r.split(":");m=m.trim(),m&&G(e,m,a.join(":").trim())}))},L=(e,t)=>{t?C(e,t):C("",e)};var M="[class]",F=()=>{document.head.querySelectorAll("style[flavor-css]").forEach(e=>{e.remove()}),u.compMap={},u.classNameCache={},document.querySelectorAll("[flavor]").forEach(E),document.body.querySelectorAll(M).forEach(x)};function E(e){let t=e.getAttribute("flavor");if(t==null)return;let r="";if(e.tagName==="TEMPLATE"){let m=e.content.cloneNode(!0);m&&(r=m.textContent)}else r=e.textContent;C(t,r)}function x(e){!e||e.className&&typeof e.className=="string"&&b(e.className)}var R=()=>{let e=(r,...m)=>{let a=r.length;for(let i=0;i<a;i++){let c=r[i];if(c.type==="childList"){let n=c.target;if(n.__flavorIgnore&&n.closest("[flavor-ignore]")&&!n.getAttribute("flavor-ignore")){n.__flavorIgnore=!0;return}E(n),x(n),c.addedNodes.length&&(n.querySelectorAll("[flavor]").forEach(E),n.querySelectorAll(M).forEach(x))}else c.type==="attributes"&&x(c.target)}};new MutationObserver(e).observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class"],characterData:!1,attributeOldValue:!1,characterDataOldValue:!1})},q=!1;var _=()=>{if(!(typeof window=="undefined"||typeof document=="undefined"||!window.location)&&!q){if(!window.MutationObserver){console.error("[flavorcss] Your Browser not supported MutationObserver");return}if(!document.body){requestAnimationFrame(_);return}document.querySelectorAll("[flavor]").forEach(E),document.body.querySelectorAll(M).forEach(e=>{x(e)}),R(),q=!0}};_();function T(){let e=`
--sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
  "Noto Color Emoji";
--serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
--mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
  "Liberation Mono", "Courier New", monospace;
--ease: cubic-bezier(0.23, 1, 0.32, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
t: transition:$1;
from: transform:$1;
sans: font-family:--sans;
serif: font-family:--serif;
mono: font-family:--mono;
d: display:$1;
pos: position:$1;
area: grid-area:$1;
areas: display:grid grid-template-areas:$1;
col: display:grid grid-auto-flow:column;
row: display:grid grid-auto-flow:row;
rows: display:grid grid-template-rows:$1;
cols: display:grid grid-template-columns:$1;
bg: background:$1;
bgm: background-image:$1;
gradient: background-image:linear-gradient($1,$2,$3);
text-gradient: -webkit-background-clip:text gradient:$1,$2,$3 color:rgba(0,0,0,0);
h: height:$1;
min-h: min-height:$1;
max-h: max-height:$1;
w: width:$1;
min-w: min-width:$1;
max-w: max-width:$1;
m: margin:$1;
mt: margin-top:$1;
mr: margin-right:$1;
ml: margin-left:$1;
mb: margin-bottom:$1;
mx: margin-bottom:0|$1;
my: margin-bottom:$1|0;
p: padding:$1;
pt: padding-top:$1;
pr: padding-right:$1;
pl: padding-left:$1;
pb: padding-bottom:$1;
px: padding-bottom:0|$1;
py: padding-bottom:$1|0;
fs: font-size:$1;
fw: font-weight:$1;
br: border-right:$1;
bl: border-left:$1;
bt: border-top:$1;
bb: border-bottom:$1;
b: border:$1;
z: z-index:$1;
ox: overflow-x:$1 -webkit-overflow-scrolling:touch;
oy: overflow-y:$1 -webkit-overflow-scrolling:touch;
radius: border-radius:$1;
`,t=document.createElement("div");t.style.display="none",t.setAttribute("flavor",""),t.textContent=e,document.body.append(t)}var I={addStyle:N,device:$,parser:b,observeClass:_,addGroup:L,mediaList:w,cache:u,reset:F,useBaseFlavor:T};window.flavorcss=I;export{I as flavorcss};
