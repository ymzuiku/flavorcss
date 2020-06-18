import Github from "./Github";
import Link from "next/link";

const list = [
  { title: "Home", url: "/" },
  { title: "Document", url: "/document" },
];

export default function Nav() {
  return (
    <nav className="px-12 h-48 bg-white fixed w-12/12 top-0 left-0 shadow row start-center">
      <img className="w-36 h-36 " src="/static/imgs/fbc-logo.svg"></img>
      {list.map((v) => {
        return (
          <Link key={v.url} href={v.url}>
            <a className="px-24 text-teal-700 hover:text-teal-900 hover:bg-teal-100 h-12/12 row center-center">{v.title}</a>
          </Link>
        );
      })}
      <div className="flex-1"></div>
      <Github />
    </nav>
  );
}
