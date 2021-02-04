import Monaco from "../Monaco";

export const EditorPlan = ({ code }: { code: string }) => {
  code = code.replace(
    '<script type="module" src="/@vite/client"></script>',
    ""
  );
  const render = <div innerHTML={code}></div>;
  const editorEle = (
    <div
      id="editor"
      class="min-h:300px sm:min-h:400px position:relative bg:#1e1e1e radius:--md overflow:hidden"
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
        model.onDidChangeContent((e) => {
          const code = model.getValue();
          render.innerHTML = code;
        });
      }
    });
  };

  let timer: any;
  // window.addEventListener("resize", () => {
  //   if (!document.body.contains(editorEle)) {
  //     return;
  //   }
  //   if (timer) {
  //     clearTimeout(timer);
  //     timer = null;
  //   }
  //   timer = setTimeout(initEdit, 500);
  // });

  // aoife.waitAppend(editorEle).then(initEdit);

  return (
    <div class="mt:--xxl p:--xxl rows:auto|350px sm:rows:auto sm:cols:1fr|600px grid-gap:--lg">
      {render}
      {editorEle}
    </div>
  );
};
