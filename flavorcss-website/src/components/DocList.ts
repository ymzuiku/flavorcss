import { DocPlan } from "./DocPlan";

const list = [
  "doc-like-style",
  "doc-no-spaces",
  "doc-use-values",
  "doc-css-selector",
  "doc-pseudo",
  "doc-media",
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

  const out = document.createElement("div");
  out.className = "margin:0|auto max-width:1100px";
  out.append(
    ...datas.map((_code) => {
      const [title, code] = _code.split("<!-- edit-code -->");
      return DocPlan({ title, code });
    })
  );

  return out;

  // return (
  //   <div class="margin:0|auto max-width:1100px">
  //     {datas.map((code) => {
  //       const [_title, _code] = code.split("<!-- edit-code -->");
  //       return <DocPlan title={_title || ""} code={_code || ""} />;
  //     })}
  //   </div>
  // );
};
