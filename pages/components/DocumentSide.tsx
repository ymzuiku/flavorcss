import Link from "next/link";
import useScrollTopRef from "components/useScrolllTopRef";
export interface DocumentSideList {
  title?: string;
  head?: string;
  url?: string;
}

export interface DocumentSideProps {
  nowUrl?: string;
  list?: DocumentSideList[];
}


export default function DocumentSide({ nowUrl, list }: DocumentSideProps) {
  const ref = useScrollTopRef("DocumentSide");
  return (
    <aside
      className="min-w-5xl w-5xl sm:w-12/12 h-12/12 br-px b-gray-300 overflow-y-auto overflow-x-hidden"
      style={{ "--mini-scrollbar-color": "var(--teal-800" } as any}
    >
      <div
        ref={(r) => (ref.current = r)}
        className="h-12/12 overflow-y-auto overflow-x-hidden mini-scrollbar"
      >
        {list.map((v) => {
          if (v.head) {
            return (
              <p
                key={v.head}
                className="text-teal-500 fw-500 fs-xs px-lg py-sm pt-md"
              >
                {v.head}
              </p>
            );
          }
          return (
            <Link key={v.url} href={v.url}>
              <a
                className={[
                  "block cursor-pointer text-teal-800 hover:bg-teal-100 p-sm pl-lg fs-sm w-12/12 last:mb-lg",
                  nowUrl === v.url && "fw-700 bg-teal-100",
                ].join(" ")}
              >
                {v.title}
              </a>
            </Link>
          );
        })}
        <div className="flex-1"></div>
      </div>
    </aside>
  );
}
