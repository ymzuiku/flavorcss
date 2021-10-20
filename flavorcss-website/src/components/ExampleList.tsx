import { ExamplePlan } from "./ExamplePlan";

const list = ["example-form", "example-grid2x2", "example-playgroup"];
let datas: any;
export const ExampleList = async () => {
  if (!datas) {
    const pList = [] as Promise<string>[];
    list.forEach((v) => {
      pList.push(fetch(`/codes/${v}.pug`).then((v) => v.text()));
    });
    datas = await Promise.all(pList);
  }

  return (
    <div class="margin:0|auto">
      {datas.map((code: string) => {
        const [_title, _code] = code.split("<!-- edit-code -->");
        return <ExamplePlan title={_title || ""} code={_code || ""} />;
      })}
    </div>
  );
};
