import Github from "./Github";
import Link from "next/link";

const list = [
  { title: "Home", url: "/" },
  { title: "Document", url: "/document" },
];

export default function Nav() {
  return (
    <nav className="px-sm h-2xl bg-white fixed w-12/12 top-0 left-0 shadow row start-center">
      <img className="w-xl h-xl " src="/static/imgs/fbc-logo.svg"></img>
      {list.map((v) => {
        return (
          <Link key={v.url} href={v.url}>
            <a className="px-sm text-teal-700 hover:text-teal-900 hover:bg-teal-100 h-12/12 row center-center">
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
