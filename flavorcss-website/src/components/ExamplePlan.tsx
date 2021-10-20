import Monaco from "../Monaco";

export const ExamplePlan = ({ title, code }: { title: string; code: string }) => {
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

  code = code.replace('<script type="module" src="/@vite/client"></script>', "");
  const render = <div innerHTML={code}></div>;
  const editorEle = (
    <div
      onAppend={initEdit}
      id="editor"
      flavor-ignore
      class="height:100% max-height:600px sm:display:block min-height:330px md:min-height:500px position:relative background:#1e1e1e border-radius:--md overflow:hidden">
      <span class="m:--xl">loading editor...</span>
    </div>
  ) as HTMLElement;
  let editor: any;

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

  let viewType = "Editing" as "Editing" | "Preview" | "Code";
  let uuid = ("u" + Math.random()).replace(".", "");

  return (
    <div
      id={uuid}
      class="margin:20px margin-top:50px sm:margin-top:100px  border:1px|solid|hsl(200,0%,90%) border-radius:12px overflow:hidden">
      {/* {titleEl} */}
      <div class="border-bottom:1px|solid|hsl(200,0%,90%) display:grid grid-template-columns:1fr|repeat(3,auto) padding:12px|0">
        <div class="align-self:center margin:0|20px font-weight:700">{title}</div>
        {["Editing", "Preview"].map((v) => {
          return (
            <div
              class={() => `
              color:hsl(210,50%,40%) text-align:center sm:hover:color:hsl(210,50%,10%) cursor:pointer margin:0|16px padding:10px border-radius:6px background:--white
              border:1px|solid|hsla(200,30%,90%,0) ${
                v === viewType && "border:1px|solid|hsl(200,30%,80%) box-shadow:0px|2px|2px|hsla(200,0%,10%,0.08)"
              }
              `}
              onclick={() => {
                viewType = v as any;
                aoife.next("#" + uuid);
              }}>
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
              <div class="height:100% box-sizing:border-box overflow-x:auto">{editorEle}</div>
            </div>
          );
        }
        return (
          <div class="display:flex flex-direction:column sm:flex-direction:row grid-gap:20px padding:20px >div:flex:1">
            <div>
              <h3 class="margin:10px font-size:16px font-weight:500 color:hsl(220,50%,20%)">
                Edit code and dynamic update right example:
              </h3>
              <div class="sm:height:700px box-sizing:border-box overflow-x:auto">{editorEle}</div>
            </div>
            <div>
              <h3 class="margin:10px font-size:16px font-weight:500 color:hsl(220,20%,50%)">Preview by left editor</h3>
              {render}
            </div>
          </div>
        );
      }}
    </div>
  );
};
