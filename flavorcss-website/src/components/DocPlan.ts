import Monaco from "../Monaco";

export const DocPlan = ({
  title = "",
  code = "",
}: {
  title: string;
  code: string;
}) => {
  code = code.replace(
    '<script type="module" src="/@vite/client"></script>',
    ""
  );
  const titleEl = document.createElement("div");
  titleEl.innerHTML = title;

  const render = document.createElement("div");
  render.innerHTML = code;

  const span = document.createElement("span");
  span.className = "m:--xl";
  span.textContent = "loading editor...";

  const editorEle = document.createElement("div");
  editorEle.setAttribute("flavor-ignore", "");
  editorEle.id = "editor";
  editorEle.className =
    "max-h:500px sm:d:block min-h:330px position:relative bg:#1e1e1e radius:--md overflow:hidden";
  editorEle.append(span);

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

  const subEle = document.createElement("div");
  subEle.className = "box-sizing:border-box max-width:100% overflow-x:auto";
  subEle.append(titleEl, editorEle);

  const out = document.createElement("div");
  out.className =
    "margin:20px margin-top:100px rows:auto|auto lg:rows:auto lg:cols:3fr|2fr grid-gap:20px";
  out.append(subEle, render);
  return out;
};
