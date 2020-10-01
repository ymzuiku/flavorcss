import Link from "next/link";
import useScrollTopRef from "components/useScrolllTopRef";
import usePathname from "components/usePathname";
export interface DocumentSideList {
  title?: string;
  head?: string;
  url?: string;
}

export interface DocumentSideProps {
  list?: DocumentSideList[];
}

export default function DocumentSide({ list }: DocumentSideProps) {
  const ref = useScrollTopRef("DocumentSide");
  const pathname = usePathname();
  return (
    <aside className="min-w-5xl w-5xl sm:w-12/12 h-12/12 overflow-y-auto overflow-x-hidden">
      <div
        ref={(r) => (ref.current = r)}
        className="h-12/12 overflow-y-auto overflow-x-hidden"
      >
        {list &&
          list.map((v) => {
            if (v.head) {
              return (
                <p
                  key={v.head}
                  className="c-green-800 c-opacity-40 fw-500 fs-xs px-lg py-sm pt-md"
                >
                  {v.head}
                </p>
              );
            }
            return (
              <Link key={v.url} href={v.url}>
                <a
                  className={[
                    "def block cursor-pointer c-primary-800 hover:bg-primary-100 active:bg-primary-200 p-sm pl-lg fs-sm w-12/12 last:mb-lg bl-0",
                    pathname === v.url &&
                      "bl-md b-primary-700 fw-700 bg-primary-100",
                  ].join(" ")}
                >
                  {v.title}
                </a>
              </Link>
            );
          })}
        <div className="h-4xl"></div>
      </div>
    </aside>
  );
}
