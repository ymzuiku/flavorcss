import { DocPlan } from "./DocPlan";

const list = [
  "doc-like-style",
  "doc-no-spaces",
  "doc-use-values",
  "doc-css-selector",
  "doc-pseudo",
  "doc-media",
  "doc-ignore",
];

const version = "0.7.0";
let datas: any;

export const DocList = async () => {
  const pList = [] as Promise<string>[];
  if (!datas) {
    list.forEach(async (v) => {
      const url = `/codes/${v}.pug?v=${version}`;
      pList.push(fetch(url).then((v) => v.text()));
    });
    datas = await Promise.all(pList);
  }

  return (
    <div class="margin:0|auto max-width:1100px">
      {datas.map((code: string) => {
        const [_title, _code] = code.split("<!-- edit-code -->");
        return <DocPlan title={_title || ""} code={_code || ""} />;
      })}
    </div>
  );
};
