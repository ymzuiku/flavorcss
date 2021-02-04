import { EditorPlan } from "./EditorPlan";

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
];
export const List = async () => {
  const pList = [] as Promise<string>[];
  list.forEach((v) => {
    const root = window.location.origin.indexOf(":") ? "/public" : "";
    pList.push(fetch(`${root}/codes/${v}.html`).then((v) => v.text()));
  });
  const datas = await Promise.all(pList);

  return (
    <div class="margin:0|auto max-width:1300px">
      {datas.map((code) => {
        return <EditorPlan code={code} />;
      })}
    </div>
  );
};
