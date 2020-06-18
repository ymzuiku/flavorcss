import Code from "components/Code";

export function DocPage(props: any) {
  return <div className="p-24 w-12/12 lg:w-md mx-auto text-teal-900" {...props}></div>;
}

export function DocCode(props: any) {
  return (
    <code className="bg-teal-100 mx-4 my-12 radius-4 p-6" {...props}></code>
  );
}

export function DocP(props: any) {
  return <div className="line-36 " {...props}></div>;
}

export function DocH1(props: any) {
  return <h1 className="fs-3xl py-24 pt-30 first:pt-10 fw-500" {...props}></h1>;
}

export function DocPre(props: any) {
  return (
    <Code
      className="my-12 bg-indigo-100 text-indigo-100 p-24 radius-2 bl-6 br-6 b-indigo-200 mono nowrap"
      {...props}
    ></Code>
  );
}
