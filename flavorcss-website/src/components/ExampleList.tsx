import { ExamplePlan } from "./ExamplePlan";

const list = ["example-form", "example-grid2x2", "example-playgroup"];
export const ExampleList = async () => {
  const pList = [] as Promise<string>[];
  list.forEach((v) => {
    pList.push(fetch(`/codes/${v}.pug`).then((v) => v.text()));
  });
  const datas = await Promise.all(pList);

  return (
    <div class="margin:0|auto">
      {datas.map((code) => {
        const [_title, _code] = code.split("<!-- edit-code -->");
        return <ExamplePlan title={_title || ""} code={_code || ""} />;
      })}
    </div>
  );
};
