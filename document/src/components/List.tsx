import { EditorPlan } from "./EditorPlan";
import { pseudos, medias } from "./moreDetail";

const list = [
  "code-a",
  "code-b",
  "code-c",
  "code-d",
  "code-e",
  "code-f",
  "code-g",
  "code-h",
  "code-i",
  "code-j",
  "code-k",
  pseudos,
  medias,
];
export const List = async () => {
  const pList = [] as Promise<string>[];
  list.forEach((v) => {
    const root = window.location.origin.indexOf(":") ? "/public" : "";
    if (typeof v === "string") {
      pList.push(fetch(`${root}/codes/${v}.html`).then((v) => v.text()));
    } else {
      pList.push(Promise.resolve(v));
    }
  });
  const datas = await Promise.all(pList);

  return (
    <div class="margin:0|auto max-width:1100px">
      {datas.map((code) => {
        if (typeof code === "string") {
          return <EditorPlan code={code} />;
        }
        return code;
      })}
    </div>
  );
};
