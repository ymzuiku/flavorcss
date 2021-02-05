import { route } from "vanilla-route";

export const Header = () => {
  const isDoc = /doc/.test(window.location.hash);
  const isExample = /example/.test(window.location.hash);
  const isHome = !isDoc && !isExample;
  return (
    <div class="w:1px h:--bar-height">
      <div class="position:fixed w:100% bg:--white z-index:9999 top:0px left:0px shadow:0px|1px|4px|hsla(0,0%,0%,0.05) h:--bar-height">
        <div class="h:100% margin:0|auto max-width:1300px d:grid content:start,center p:0px|--md cols:repeat(1,auto)|1fr sm:cols:repeat(4,auto)|1fr self:auto,center:>label grid-gap:20px place-centent:center">
          <span
            class="cursor:pointer mono fw:900 fs:24px text-gradient:120deg,hsl(200,50%,50%),hsl(330,50%,20%) line-height:2"
            onclick={() => route.push("/")}
          >
            flavorcss
          </span>
          <h2
            class={[
              "cursor:pointer d:none sm:d:grid content:center,center w:60px",
              isHome ? "fw:800" : "",
            ]}
            onclick={() => route.push("/")}
          >
            Home
          </h2>
          <h2
            class={[
              "cursor:pointer d:none sm:d:grid content:center,center width:80px",
              isDoc ? "fw:800" : "",
            ]}
            onclick={() => route.push("/doc", true)}
          >
            Document
          </h2>
          <h2
            class={[
              "cursor:pointer d:none sm:d:grid content:center,center width:80px",
              isExample ? "fw:800" : "",
            ]}
            onclick={() => route.push("/example", true)}
          >
            Example
          </h2>
          <div
            class="self:end,center pointer radius:6px d:grid place-content:center hover:bg:hsl(--h,55%,40%) bg:hsl(--h,55%,45%) p:8px color:--white hover:box-shadow:0px|6px|10px|hsla(--h,55%,20%,0.2) ease:0.3s grid-gap:14px hover:transform:translateY(-1px)"
            onclick={() => window.open("https://github.com/ymzuiku/flavorcss")}
          >
            <svg
              t="1612405330114"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2123"
              width="20px"
              height="20px"
            >
              <path
                d="M511.543 14.057C228.914 13.943 0 242.743 0 525.143 0 748.457 143.2 938.286 342.629 1008c26.857 6.743 22.742-12.343 22.742-25.371v-88.572C210.286 912.23 204 809.6 193.6 792.457c-21.029-35.886-70.743-45.028-55.886-62.171 35.315-18.172 71.315 4.571 113.029 66.171 30.171 44.686 89.028 37.143 118.857 29.714 6.514-26.857 20.457-50.857 39.657-69.485C248.571 727.886 181.6 629.829 181.6 513.257c0-56.571 18.629-108.571 55.2-150.514-23.314-69.143 2.171-128.343 5.6-137.143 66.4-5.943 135.429 47.543 140.8 51.771C420.914 267.2 464 261.83 512.229 261.83c48.457 0 91.657 5.6 129.714 15.885 12.914-9.828 76.914-55.771 138.628-50.171 3.315 8.8 28.229 66.628 6.286 134.857 37.029 42.057 55.886 94.514 55.886 151.2 0 116.8-67.429 214.971-228.572 243.314a145.714 145.714 0 0 1 43.543 104v128.572c0.915 10.285 0 20.457 17.143 20.457 202.4-68.229 348.114-259.429 348.114-484.686 0-282.514-229.028-511.2-511.428-511.2z"
                p-id="2124"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
