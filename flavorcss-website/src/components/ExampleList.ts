import { ExamplePlan } from "./ExamplePlan";

const list = ["example-form", "example-grid2x2", "example-playgroup"];
export const ExampleList = async () => {
  const pList = [] as Promise<string>[];
  list.forEach((v) => {
    pList.push(fetch(`/codes/${v}.pug`).then((v) => v.text()));
  });
  const datas = await Promise.all(pList);

  const out = document.createElement("div");
  out.className = "margin:0|auto";
  out.append(
    ...datas.map((_code) => {
      const [title, code] = _code.split("<!-- edit-code -->");
      return ExamplePlan({ title, code });
    })
  );

  return out;
};
