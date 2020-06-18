import Code from "components/Code";

export function DocPage(props: any) {
  return <div className="p-lg w-12/12 lg:w-middle mx-auto text-teal-900" {...props}></div>;
}

export function DocCode(props: any) {
  return (
    <code className="bg-teal-100 mx-sm my-md radius-sm py-px p-xs" {...props}></code>
  );
}

export function DocP(props: any) {
  return <div className="line-3xl" {...props}></div>;
}

export function DocH1(props: any) {
  return <h1 className="fs-3xl py-lg pt-lg fw-500" {...props}></h1>;
}

export function DocPre(props: any) {
  return (
    <Code
      className="my-sm bg-indigo-100 text-indigo-100 p-lg radius-sm bl-sm br-sm b-indigo-200 mono nowrap"
      {...props}
    ></Code>
  );
}
