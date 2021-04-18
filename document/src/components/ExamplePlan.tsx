import Monaco from "../Monaco";

export const ExamplePlan = ({
  title,
  code,
}: {
  title: string;
  code: string;
}) => {
  code = code.replace(
    '<script type="module" src="/@vite/client"></script>',
    ""
  );
  const render = <div innerHTML={code}></div>;
  const editorEle = (
    <div
      id="editor"
      flavor-ignore
      class="h:100% max-h:600px sm:d:block min-h:330px md:min-h:500px position:relative bg:#1e1e1e radius:--md overflow:hidden"
    >
      <span class="m:--xl">loading editor...</span>
    </div>
  ) as HTMLElement;
  let editor: any;
  const initEdit = () => {
    Monaco().then((monaco) => {
      editorEle.textContent = "";
      const editor = monaco.editor.create(editorEle, {
        value: code.trim(),
        language: "html",
        theme: "vs-dark",
        wordWrap: "on",
        fontSize: 15,
        minimap: { enabled: false },
      });
      const model = editor.getModel();
      if (model) {
        let timer: any;
        model.onDidChangeContent((e) => {
          if (timer) {
            clearTimeout(timer);
            timer = null;
          }
          timer = setTimeout(() => {
            const code = model.getValue();
            render.innerHTML = code;
            (window as any).flavorcss.reset();
          }, 100);
        });
      }
    });
  };

  let timer: any;
  window.addEventListener("resize", () => {
    if (!document.body.contains(editorEle)) {
      return;
    }
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(initEdit, 500);
  });

  aoife.waitAppend(editorEle).then(initEdit);

  // if (window.innerWidth < 640) {
  //   <div class="mt:--xxl p:--xxl">{render}</div>;
  // }
  let viewType = "Editing" as "Editing" | "Preview" | "Code";
  let uuid = ("u" + Math.random()).replace(".", "");

  return (
    <div
      id={uuid}
      class="margin:20px margin-top:50px sm:margin-top:100px  border:1px|solid|hsl(200,0%,90%) border-radius:12px overflow:hidden"
    >
      {/* {titleEl} */}
      <div class="border-bottom:1px|solid|hsl(200,0%,90%) display:grid grid-template-columns:1fr|repeat(3,auto) padding:12px|0">
        <div class="align-self:center margin:0|20px font-weight:700">
          {title}
        </div>
        {["Editing", "Preview"].map((v) => {
          return (
            <div
              class="color:hsl(210,50%,40%) text-align:center sm::hover:color:hsl(210,50%,10%) cursor:pointer margin:0|16px padding:10px border-radius:6px background:--white"
              classPick={() => ({
                "border:1px|solid|hsla(200,30%,90%,0)": true,
                "border:1px|solid|hsl(200,30%,80%) box-shadow:0px|2px|2px|hsla(200,0%,10%,0.08)":
                  v === viewType,
              })}
              onclick={() => {
                viewType = v as any;
                aoife.next("#" + uuid);
              }}
            >
              {v}
            </div>
          );
        })}
      </div>
      {() => {
        if (viewType === "Preview") {
          return <div class="padding:20px">{render}</div>;
        }
        if (viewType === "Code") {
          return (
            <div class="height:100% padding:20px">
              <div class="height:100% box-sizing:border-box overflow-x:auto">
                {editorEle}
              </div>
            </div>
          );
        }
        return (
          <div class="rows:auto|auto lg:rows:auto lg:cols:1fr|1fr grid-gap:20px padding:20px">
            <div>
              <h3 class="margin:10px font-size:16px font-weight:500 color:hsl(220,50%,20%)">
                Edit code and dynamic update right example:
              </h3>
              <div class="sm:height:700px box-sizing:border-box overflow-x:auto">
                {editorEle}
              </div>
            </div>
            {render}
          </div>
        );
      }}
    </div>
  );
};
