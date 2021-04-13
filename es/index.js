var u={compMap:{"":{}},classNameCache:{}};var x,$=()=>{if(x)return x;let e=navigator.userAgent.toLocaleLowerCase(),t=/(?:android)/.test(e),r=/(?:firefox)/.test(e),s=/(?:chrome|crios)/.test(e),a=/(safari)/.test(e),i=/(?:ipad|playbook)/.test(e)||t&&!/(?:mobile)/.test(e)||r&&/(?:tablet)/.test(e),m=/(?:iphone)/.test(e)&&!i,n=!m&&!t,o=!n,c=o&&/(micromessenger|wechat)/.test(e),l=m&&window.screen.height>=812,p=window.location.href.indexOf("native")>-1;return x={isNeedSafeBottom:l,isNeedSafeTop:p,android:t,firefox:r,chrome:s,tablet:i,ios:m,wechat:c,pc:n,phone:o,safari:a},x};function z(e,t,r){e.comp=t[r],e.comp?e.compName=r:e.name=r}function j(e,t){w[t]?(e.media=w[t],e.mediaName=t):$()[t]!==void 0&&(e.media=`@media screen and (min-width: ${$()[t]?"0px":"9999px"})`,e.mediaName=t)}var w={all:"",print:"@media print",speech:"@media speech",dark:"@media (prefers-color-scheme: dark)",xs:"@media screen and (min-width: 480px)",sm:"@media screen and (min-width: 640px)",md:"@media screen and (min-width: 768px)",lg:"@media screen and (min-width: 1024px)",xl:"@media screen and (min-width: 1280px)",xxl:"@media screen and (min-width: 1536px)","in-xs":"@media screen (max-width:479px) and (min-width: 0px)","in-sm":"@media screen (max-width:767px) and (min-width: 479px)","in-md":"@media screen (max-width:1023px) and (min-width: 767px)","in-lg":"@media screen (max-width:1279px) and (min-width: 1023px)","in-xl":"@media screen (max-width:1535px) and (min-width: 1279px)","in-xxl":"@media screen (max-width:9999px) and (min-width: 1535px)"},S={};function O(e,t){!t||(e.comp&&(t=t.replace(/\((.*?)\)/g,r=>r.replace(/\,/g,"^^^"))),e.value=t)}function g(e,t){let r=e+"_$$_"+t,s=S[r];if(s)return s;let a={comp:void 0,compName:"",pesudo:"",pesudoName:"",media:"",mediaName:"",name:"",value:"",query:""};if(!t||t[0]==="/"&&t[1]==="/")return S[r]=a,a;let i=u.compMap[e]||{},m=t.split(":");j(a,m[0]),a.mediaName&&m.shift();let n=m.length,o=m[n-1],c=n>=2?m[n-2]:"",l=[...m];return i[o]?(a.comp=i[o],a.compName=o,l.pop()):c?(z(a,i,c),O(a,o),l.pop(),l.pop()):(a.name=o,l.pop()),a.pesudo=l.join(":"),a.pesudoName=a.pesudo,S[r]=a,a}var H={"(":1,";":1,":":1,"=":1},N=({css:e,name:t="",media:r="",mediaName:s="",pesudo:a="",group:i=""})=>{if(!e)return;let m=`^sty_${e}_${t}_${r}_${a}_${i}`;if(u.classNameCache[m])return;u.classNameCache[m]=!0;let n=g(i,e),o=n.value;if(!o)return;let c=o[o.length-1];if(H[c])return;c==="!"&&(o=o.replace(/(!$)/," !important")),n.media&&(r=n.media),n.mediaName&&(s=n.mediaName),n.pesudo&&(a=n.pesudo);let l=o.split("~");l.length>1&&(o=" "+l.map(f=>`"${f}"`).join(" "),o+=";"),o=o.replace(/calc\((.*?)\)/g,f=>(f=f.replace(/(-|\+|\*|\/)/g,B=>" "+B+" "),f)),o=o.replace(/\|/g," "),o=o.replace(/var\((.*?)\)/g,f=>f.replace(/(var\(|\))/g,"")),o=o.replace(/--([a-zA-Z0-9_-]*)/g,f=>`var(${f})`),o=o.replace(/\^\^\^/g,",");let p=(t||e).replace(/(\:|#|\*|!|,|\.|>|<|@|~|%|\||\$|\{|\}|\[|\]|\(|\)|\+|\*|\/)/g,f=>"\\"+f),d=i?`.\\*${i}`:"";/^(\w|\*)/.test(a)&&(a=" "+a),a=a.replace(/\|/g," ");let h=document.createElement("style");if(r?h.textContent=`${r} {.${p}${d}${a}{${n.name}:${o}}}`:h.textContent=`.${p}${d}${a}{${n.name}:${o}}`,h.setAttribute("flavor-css",""),document.head.append(h),s){let f=document.createElement("style");f.textContent=`.media-${s} .${p}${d}${a}{${n.name}:${o}}`,f.setAttribute("flavor-css",""),document.head.append(f)}};var A={},v=e=>{let t=A[e];if(t)return t;let r=[];e=e.replace(/\n/g," ");let s=[],a=e.match(/\*(.\w?)\s/g),i={};if(a)a.forEach(o=>{if(o){let c=o.replace(/(\*|\s)/g,"");c&&(s.push(c),i[c]=!0)}});else return r.push({group:"",cssItem:e}),A[e]=r,r;let m=/\*(.*?)\s/g,n=e.split(m);return n.forEach((o,c)=>{if(o=o.trim(),!o)return;let l=n[c+1];c===0&&!i[o]&&r.push({cssItem:o,group:""}),i[o]&&l&&!i[l]&&r.push({cssItem:l.trim(),group:o})}),A[e]=r,r};var b=(e,t="",r="",s="",a="",i="")=>{let m=`^parser_${e}_${t}_${r}_${s}_${a}`;return u.classNameCache[m]||(u.classNameCache[m]=!0,v(e).forEach(({cssItem:n,group:o})=>{n.split(" ").filter(Boolean).forEach(c=>{let l=o,p=g(o,c);if(p.comp||(p=g("",c),l=""),p.comp){let d=p.comp(p.value.split(","));b(d,c,p.media,p.mediaName,p.pesudo,l)}else N({css:c,name:t,media:r,mediaName:s,pesudo:a,group:i})})})),e};var k={},G=(e,t,r)=>{let s=`^group_${e}_${t}_${r}`;k[s]||(k[s]=!0,u.compMap[e]||(u.compMap[e]={}),u.compMap[e][t]=a=>{let i=r;a.forEach((c,l)=>{i=i.replace(new RegExp(`(\\$${l+1})`,"g"),c)});let m=a[a.length],n=c=>{i.indexOf("$"+c)>-1&&(i=i.replace(new RegExp(`(\\$${c+1})`,"g"),m),n(c+1))};n(r.length+1);let o="";return v(i).forEach(({cssItem:c,group:l})=>{c.split(" ").forEach(p=>{let d=g(l,p);d.comp||(d=g(e,p),!d.comp&&e!==""&&l!==""&&(d=g("",p))),d.comp&&d.compName!==t?d.comp(d.value.split(",")).split(" ").forEach(f=>{o+=[d.query,d.mediaName,d.pesudoName,f].filter(Boolean).join(":")+" "}):o+=p+" "})}),o})};var C=(e,t)=>{!t||(t=t.replace(`
`,""),t=t.replace(/(\/\/\s)/g,"//"),t.trim().split(";").forEach(r=>{let[s,...a]=r.split(":");s=s.trim(),s&&G(e,s,a.join(":").trim())}))},L=(e,t)=>{t?C(e,t):C("",e)};var M="[class]",F=()=>{document.head.querySelectorAll("style[flavor-css]").forEach(e=>{e.remove()}),u.compMap={},u.classNameCache={},document.querySelectorAll("[flavor]").forEach(E),document.body.querySelectorAll(M).forEach(y)};function E(e){let t=e.getAttribute("flavor");if(t==null)return;let r="";if(e.tagName==="TEMPLATE"){let s=e.content.cloneNode(!0);s&&(r=s.textContent)}else r=e.textContent;C(t,r)}function y(e){!e||e.className&&typeof e.className=="string"&&b(e.className)}var R=()=>{let e=(r,...s)=>{let a=r.length;for(let i=0;i<a;i++){let m=r[i];if(m.type==="childList"){let n=m.target;if(n.__flavorIgnore&&n.closest("[flavor-ignore]")&&!n.getAttribute("flavor-ignore")){n.__flavorIgnore=!0;return}E(n),y(n),m.addedNodes.length&&(n.querySelectorAll("[flavor]").forEach(E),n.querySelectorAll(M).forEach(y))}else m.type==="attributes"&&y(m.target)}};new MutationObserver(e).observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class"],characterData:!1,attributeOldValue:!1,characterDataOldValue:!1})},q=!1;var _=()=>{if(!(typeof window=="undefined"||typeof document=="undefined"||!window.location)&&!q){if(!window.MutationObserver){console.error("[flavorcss] Your Browser not supported MutationObserver");return}if(!document.body){requestAnimationFrame(_);return}document.querySelectorAll("[flavor]").forEach(E),document.body.querySelectorAll(M).forEach(e=>{y(e)}),R(),q=!0}};_();function T(){let e=`
:root {
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
}
  `,t=document.createElement("style");t.textContent=e,document.head.append(t);let r=`
t: transition:$1;
from: transform:$1;
sans: font-family:--sans;
serif: font-family:--serif;
mono: font-family:--mono;
d: display:$1;
pe: pointer-events:$1;
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
o: overflow:$1 -webkit-overflow-scrolling:touch;
ox: overflow-x:$1 -webkit-overflow-scrolling:touch;
oy: overflow-y:$1 -webkit-overflow-scrolling:touch;
radius: border-radius:$1;
`,s=document.createElement("div");s.style.display="none",s.setAttribute("flavor",""),s.textContent=r,document.body.append(s)}var I={addStyle:N,device:$,parser:b,observeClass:_,addGroup:L,mediaList:w,cache:u,reset:F,useBaseFlavor:T};window.flavorcss=I;export{I as flavorcss};
