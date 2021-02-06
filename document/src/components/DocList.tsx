import { DocPlan } from "./DocPlan";

const list = [
  "doc-like-style",
  "doc-no-spaces",
  "doc-use-values",
  "doc-pseudo",
  "doc-media",
  "doc-css-selector",
  "doc-custom",
  "doc-custom-group",
  "doc-place-media",
  "doc-ignore",
];
export const DocList = async () => {
  const pList = [] as Promise<string>[];
  list.forEach((v) => {
    pList.push(fetch(`/codes/${v}.pug`).then((v) => v.text()));
  });
  const datas = await Promise.all(pList);

  return (
    <div class="margin:0|auto max-width:1100px">
      {datas.map((code) => {
        const [_title, _code] = code.split("<!-- edit-code -->");
        return <DocPlan title={_title || ""} code={_code || ""} />;
      })}
    </div>
  );
};
