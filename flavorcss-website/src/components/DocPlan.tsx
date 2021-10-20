import Monaco from "../Monaco";

export const DocPlan = ({ title, code }: { title: string; code: string }) => {
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
  const titleEl = <div innerHTML={title}></div>;
  const render = <div innerHTML={code}></div>;
  const editorEle = (
    <div
      onAppend={initEdit}
      flavor-ignore
      id="editor"
      class="max-height:500px sm:display:block min-height:330px position:relative background:#1e1e1e border-radius:--md overflow:hidden">
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

  return (
    <div class="margin:100px|20px display:grid grid-template-rows:auto|auto lg:grid-template-rows:auto lg:grid-template-columns:3fr|2fr grid-gap:20px">
      <div class="box-sizing:border-box max-width:100% overflow-x:auto">
        {titleEl}
        {editorEle}
      </div>
      <div class="border:1px|solid|hsl(--h,20%,80%) border-radius:10px padding:--sm">
        <div class="font-size:12px color:hsl(--h,20%,60%)">PREVIEW</div>
        <div>{render}</div>
      </div>
    </div>
  );
};
