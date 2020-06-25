import Github from "./Github";
import Link from "next/link";
import usePathname from "components/usePathname";

const list = [
  { title: "Document", url: "/" },
  { title: "Example", url: "/example" },
  // { title: "Example", url: "/example" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="px-sm h-2xl bg-white fixed w-12/12 top-0 left-0 bb-px b-gray-300 row start-center z-20">
      <img className="w-xl h-xl mr-md" src="/static/imgs/flavorcss-logo.svg"></img>
      <h1 className="fs-2xl c-black fw-700 mr-lg" >flavorcss</h1>
      {list.map((v) => {
        const match =
        v.url === "/" ? pathname === v.url : pathname.indexOf(v.url) > -1;

        return (
          <Link key={v.url} href={v.url}>
            <a
              className={[
                "none pc:flex mx-sm px-md c-primary-600 hover:c-primary-900 hover:bg-primary-200 h-12/12 row center-center",
                match && "bg-primary-100 c-primary-999",
              ].join(" ")}
            >
              {v.title}
            </a>
          </Link>
        );
      })}
      <div className="flex-1"></div>
      <Github />
    </nav>
  );
}
