import { EditorPlan } from "./EditorPlan";

const list = [
  // "code-a",
  "like-style",
  "no-spaces",
  "use-values",
  "pseudo",
  "media",
  "css-selector",
  "custom",
  "custom-group",
  "place-media",
  // "code-h",
  // "code-i",
  // "code-j",
  // "code-k",
];
export const List = async () => {
  const pList = [] as Promise<string>[];
  list.forEach((v) => {
    pList.push(fetch(`/codes/${v}.pug`).then((v) => v.text()));
  });
  const datas = await Promise.all(pList);

  return (
    <div class="margin:0|auto max-width:1100px">
      {datas.map((code) => {
        const [_title, _code] = code.split("<!-- edit-code -->");
        return <EditorPlan title={_title || ""} code={_code || ""} />;
      })}
    </div>
  );
};
