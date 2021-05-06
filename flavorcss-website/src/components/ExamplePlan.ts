import Monaco from "../Monaco";
import { Ob } from "vanilla-ob";

export const ExamplePlan = ({
  title = "",
  code = "",
}: {
  title: string;
  code: string;
}) => {
  const ob = Ob({ viewType: "Editing" as "Editing" | "Preview" | "Code" });
  const actives = [] as Function[];
  code = code.replace(
    '<script type="module" src="/@vite/client"></script>',
    ""
  );
  const render = document.createElement("div");
  render.innerHTML = code;

  const span = document.createElement("div");
  span.className = "m:--xl";
  span.textContent = "oading editor...";

  const editorEle = document.createElement("div");
  (editorEle.id = "editor"), editorEle.setAttribute("flavor-ignore", "");
  editorEle.className =
    "h:100% max-h:600px sm:d:block min-h:330px md:min-h:500px position:relative bg:#1e1e1e radius:--md overflow:hidden";
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
            const _code = model.getValue();
            render.innerHTML = _code;
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

  let uuid = ("u" + Math.random()).replace(".", "");

  const titleEl = document.createElement("div");
  titleEl.className = "align-self:center margin:0|20px font-weight:700";
  titleEl.textContent = title;

  const list = ["Editing", "Preview"].map((v) => {
    const out = document.createElement("div");

    ob.use(
      out,
      (s) => [s.viewType],
      (viewType) => {
        out.className = [
          "color:hsl(210,50%,40%) text-align:center sm::hover:color:hsl(210,50%,10%) cursor:pointer margin:0|16px padding:10px border-radius:6px background:--white border:1px|solid|hsla(200,30%,90%,0)",
          v === viewType &&
            "border:1px|solid|hsl(200,30%,80%) box-shadow:0px|2px|2px|hsla(200,0%,10%,0.08)",
        ].join(" ");
      }
    );

    out.onclick = () => {
      ob.next((s) => {
        s.viewType = v as any;
      });
    };
    out.textContent = v;

    out.append();
    return out;
  });

  const box = document.createElement("div");
  box.className =
    "border-bottom:1px|solid|hsl(200,0%,90%) display:grid grid-template-columns:1fr|repeat(3,auto) padding:12px|0";
  box.append(titleEl, ...list);

  const out = document.createElement("div");
  out.id = uuid;
  out.className =
    "margin:20px margin-top:50px sm:margin-top:100px  border:1px|solid|hsl(200,0%,90%) border-radius:12px overflow:hidden";

  ob.use(
    out,
    (s) => [s.viewType],
    (viewType) => {
      out.innerHTML = "";
      if (viewType === "Preview") {
        const div = document.createElement("div");
        div.className = "padding:20px";
        div.append(render);
        return out.append(div);
      }
      if (viewType === "Code") {
        const sub = document.createElement("div");
        sub.className = "height:100% box-sizing:border-box overflow-x:auto";
        sub.append(editorEle);

        const div = document.createElement("div");
        div.className = "height:100% padding:20px";
        div.append(sub);

        return out.append(div);
      }
      const h3 = document.createElement("h3");
      h3.className =
        "margin:10px font-size:16px font-weight:500 color:hsl(220,50%,20%)";
      h3.textContent = "Edit code and dynamic update right example:";

      const editBox = document.createElement("div");
      editBox.className =
        "sm:height:700px box-sizing:border-box overflow-x:auto";
      editBox.append(editorEle);

      const subBox = document.createElement("div");
      subBox.append(h3, editBox);

      const box = document.createElement("div");
      box.className =
        "rows:auto|auto lg:rows:auto lg:cols:1fr|1fr grid-gap:20px padding:20px";
      box.append(subBox, render);
    }
  );
  out.append();
  return out;
};
