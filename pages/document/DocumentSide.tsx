import Link from "next/link";

const list = [
  { title: "Document" },
  { title: "Why fbc?", url: "/document" },
  { title: "Document" },
  { title: "Start", url: "/document/start" },
  { title: "Start", url: "/document/start2" },
  { title: "Start", url: "/document/start2" },
  { title: "Start", url: "/document/start2" },
  { title: "Start", url: "/document/start2" },
  { title: "Start", url: "/document/start2" },
  { title: "Start", url: "/document/start2" },
  { title: "Start", url: "/document/start2" },
  { title: "Start", url: "/document/start2" },
  { title: "Start", url: "/document/start2" },
  { title: "Start", url: "/document/start2" },
  { title: "Start", url: "/document/start2" },
  { title: "Start", url: "/document/start2" },
  { title: "Start", url: "/document/start2" },
  { title: "Start", url: "/document/start2" },
  { title: "Start", url: "/document/start2" },
  { title: "Start", url: "/document/start2" },
  { title: "Start", url: "/document/start2" },
  { title: "Start", url: "/document/start2" },
  { title: "Start", url: "/document/start2" },
  { title: "Start", url: "/document/start2" },
  { title: "Start", url: "/document/start2" },
  { title: "Start", url: "/document/start2" },
  { title: "Start", url: "/document/start2" },
  { title: "Start", url: "/document/start2" },
  { title: "Start", url: "/document/start2" },
  { title: "Start", url: "/document/start2" },
  { title: "Start", url: "/document/start2" },
  { title: "Start", url: "/document/start2" },
  { title: "Start", url: "/document/start2" },
  { title: "Start", url: "/document/start2" },
];

interface Props {
  nowUrl?: string;
}

export default function DocumentSide({ nowUrl }: Props) {
  return (
    <aside className="min-w-180 w-180 sm:w-12/12 mini-scrollbar h-12/12 shadow overflow-y-auto overflow-x-hidden">
      <div className="lg:top-48 lg:fixed lg:w-180 h-12/12 overflow-y-auto overflow-x-hidden mini-scrollbar">
        {list.map((v) => {
          if (!v.url) {
            return (
              <p key={v.title} className="text-teal-400 fs-xs px-12 pt-12">
                {v.title}
              </p>
            );
          }
          return (
            <Link key={v.url} href={v.url}>
              <a
                className={[
                  "block cursor-pointer text-teal-800 hover:bg-teal-100 p-12 w-12/12",
                  nowUrl === v.url && "fw-700",
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
