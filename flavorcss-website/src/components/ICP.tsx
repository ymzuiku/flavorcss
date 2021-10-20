export function ICP() {
  return (
    <div class="font-size:12px display:flex justify-content:center padding:10px opacity:0.7">
      <div>版权所有©2021 深圳格物链 All Rights Reserved</div>
      <div
        class="margin-left:10px hover:color:blue color:#66a cursor:pointer"
        onclick={() => {
          window.open("https://beian.miit.gov.cn");
        }}>
        粤ICP备20045772号
      </div>
    </div>
  );
}
